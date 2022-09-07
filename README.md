# Sms-Activate.org Typescript

This package fully supports all the https://sms-activate.org/ API with Typescript types.

## Installation

Install smsactivate-org with npm

```bash
  npm install smsactivate-org
```

## Usage/Examples

```javascript
import { SMSActivate } from 'smsactivate-org'
import { INumber } from 'smsactivate-org/dist/ressources/responses'

const api = new SMSActivate('myapikey');

(async () => {
    const balance = await api.getBalance();
    console.log(`My balance is ${balance}`);
})();

api.getNumberV2({ country: 'Russia', service: 'vk' }).then(number: INumber => {
    console.log(number);
})
```

## Roadmap

- Complete documentation
