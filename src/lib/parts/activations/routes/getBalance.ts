import { EApiActions } from '../../../../ressources/comon';
import { Query } from '../../../query/query.module';

export class getBalance {
  public query?: Query;

  /**
   * Get the account balance
   * @returns Balance as a float
   */
  async getBalance() {
    return new Promise<number>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getBalance)
        .then((response) => {
          if (response.includes('ACCESS_BALANCE'))
            return resolve(parseFloat(response.split(':')[1]));
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
