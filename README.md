# Sms-Activate.org Typescript

This package fully supports all the https://sms-activate.org/ API with Typescript types.

## Installation

Install the package using npm

```bash
  npm install sms-activate-org
```

## Usage/Examples

```javascript
import { SMSActivate, INumber, EActivationSetStatus } from 'smsactivate-org';

const api = new SMSActivate('myapikey');

(async () => {
    const balance = await api.getBalance();
    console.log(`My balance is ${balance}`);
})();

/* Getting a number to activate Google services,
* the wrapper converts automatically country names to the country id */
api.getNumber({ service: 'go', country: 'france' }).then(async number: INumber => {

  // Do your stuff with number.phoneNumber here,
  // like writing in the number field, and press the send code button

  /** Setting code status to Sent **/
  await api.setStatus({ id: number.activationId, status: EActivationSetStatus.Sent });

  try {
    /** Waiting a maximum of 180s for the code to arrive **/
    const code = await api.utils.waitForCode(number.activationId);

    // Do your stuff with the code there

    /** Setting code status to Success if everything worked as expected **/
    await api.setStatus({ id: number.activationId, status: EActivationSetStatus.Success });
  } catch(err) {
    console.error(err);

    /** Setting code status to Failed if the code was used,
     * you can also handle the code resend using EActivationSetStatus.RequestAnotherCode **/
    await api.setStatus({ id: number.activationId, status: EActivationSetStatus.Failed });
  }

}).catch(error => console.error);
```

## Note

I wrapped all the website API, the wiki is not yet finished but don't hesitate to ask for help in issues.
