import { EApiErrors } from '../../../../ressources/errors';
import { EApiActions } from '../../../../ressources/comon';
import { Query } from '../../../query/query.module';

export class getBalanceAndCashBack {
  public query?: Query;

  /**
   * Get the account balance
   * @returns Balance as a float
   */
  async getBalanceAndCashBack() {
    return new Promise<number>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getBalanceAndCashBack)
        .then((response) => {
          if (response.includes('ACCESS_BALANCE'))
            return resolve(parseFloat(response.split(':')[1]));
          if (EApiErrors[response])
            return reject(new Error(EApiErrors[response]));
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
