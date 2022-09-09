import { EApiActions } from '../../../../ressources/comon';
import { IGetMultiServiceNumberOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';
import { Countries } from '../../utils/countries';
import { IMultiNumber } from '../../../../ressources/responses';

export class getMultiServiceNumber {
  public query?: Query;
  public countries?: Countries;

  async getMultiServiceNumber(
    options: IGetMultiServiceNumberOptions
  ): Promise<IMultiNumber[]> {
    return new Promise<IMultiNumber[]>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getMultiServiceNumber, options)
        .then((response) => {
          if (typeof response == 'object') return resolve(response);
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
