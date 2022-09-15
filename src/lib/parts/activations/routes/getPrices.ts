import { EApiActions } from '../../../../ressources/comon';
import { IGetPricesOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';
import { Countries } from '../../utils/countries';
import { Services } from '../../utils/services';

export class getPrices {
  public query?: Query;
  public countries?: Countries;
  public services?: Services;

  async getPrices(options: IGetPricesOptions) {
    if (typeof options.country == 'string')
      options.country = await this.countries?.toNumber(options.country);
    if (options.service) options.service = this.services?.get(options.service);
    return this.query?.makeCall(EApiActions.getPrices, options);
  }
}
