import { EApiActions } from '../../../../ressources/comon';
import { EApiErrors } from '../../../../ressources/errors';
import { IContinueRentNumberOptions } from '../../../../ressources/options';
import { IRentedNumber } from '../../../../ressources/responses';
import { Query } from '../../../query/query.module';

export class continueRentNumber {
  public query?: Query;

  async continueRentNumber(
    options: IContinueRentNumberOptions
  ): Promise<IRentedNumber> {
    return new Promise<IRentedNumber>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.continueRentNumber, options)
        .then((response) => {
          if (typeof response == 'object') {
            if (response.status == 'success' && response.phone)
              return resolve(response.phone);
            if (response.message && EApiErrors[response.message])
              return reject(new Error(EApiErrors[response.message]));
          } else if (typeof response == 'string') {
            if (EApiErrors[response])
              return reject(new Error(EApiErrors[response]));
          }
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
