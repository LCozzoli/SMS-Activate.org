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

const api = new SMSActivate('myapikey');

(async () => {
    const balance = await api.getBalance();
    console.log(`My balance is ${balance}`);
})();

/* Getting a number to activate Gmail services,
* the wrapper automatically resolves country and services names */
api.getNumber({ service: 'Gmail', country: 'France' }).then(async number: SMSNumber => {

  // Do your stuff with number.phoneNumber here,
  // like writing in the number field

  /** Setting code status to Ready **/
  await number.ready(); // or api.setStatus({ id: number.activationId, status: EActivationSetStatus.Ready });

  // Press the send sms button

  try {
    /** Waiting a maximum of 180s for the code to arrive **/
    const code = await number.getCode();

    // Do your stuff with the code there

    /** Setting code status to Success if everything worked as expected **/
    await number.success(); // or api.setStatus({ id: number.activationId, status: EActivationSetStatus.Success });

  } catch(err) {
    console.error(err);

    /** Setting code status to Failed if the code was used **/
    await number.failed();
  }

}).catch(console.error);
```

## Note

I wrapped all the website API, the wiki is not yet finished but don't hesitate to ask for help in issues.
