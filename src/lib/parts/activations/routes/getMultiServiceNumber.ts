import { EApiActions } from '../../../../ressources/comon';
import { IGetMultiServiceNumberOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';
import { Countries } from '../../utils/countries';
import { IMultiNumber } from '../../../../ressources/responses';
import { Services } from '../../utils/services';

export class getMultiServiceNumber {
  public query?: Query;
  public countries?: Countries;
  public services?: Services;

  async getMultiServiceNumber(
    options: IGetMultiServiceNumberOptions
  ): Promise<IMultiNumber[]> {
    if (typeof options.country == 'string')
      options.country = await this.countries?.toNumber(options.country);
    if (options.service) options.service = this.services?.get(options.service);
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
