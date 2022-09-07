import { EApiActions } from '../../../../ressources/comon';
import { EApiErrors } from '../../../../ressources/errors';
import { IContinueRentNumberPriceOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';

export class getContinueRentPriceNumber {
  public query?: Query;

  async getContinueRentPriceNumber(
    options: IContinueRentNumberPriceOptions
  ): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getContinueRentPriceNumber, options)
        .then((response) => {
          if (typeof response == 'object') {
            if (response.status == 'success' && response.price)
              return resolve(parseFloat(response.price));
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
