# Sms-Activate.org

This package fully supports all the https://sms-activate.org/ API with Typescript types.

## Installation

Install the package using npm

```bash
  npm install sms-activate-org
```

## Usage/Examples

```javascript
import { SMSActivate, SMSNumber } from 'sms-activate-org';

const api = new SMSActivate('myapikey'); //OR SMS_ACTIVATE_API_KEY=myapikey in .env

(async () => {
    const balance = await api.getBalance();
    console.log(`My balance is ${balance}`);
})();

/* Getting a number to activate Gmail services,
* the wrapper automatically resolves country and services names */
api.getNumber({ service: 'Gmail', country: 'France' }).then(async number: SMSNumber => {

  // Do your stuff with number.phoneNumber here,
  // like writing it in the number field

  await number.ready();

  // Press the "send sms" button, wait for 180s to catch the code

  number.getCode(180).then(async code => {

    // Do your stuff with the verification code there

    await number.success();
  }).catch(err => {
    console.error(err);
    number.failed();
  })

}).catch(console.error);
```
