import { EApiActions } from '../../../../ressources/comon';
import { IGetPricesOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';

export class getPrices {
  public query?: Query;

  async getPrices(options: IGetPricesOptions) {
    return this.query?.makeCall(EApiActions.getPrices, options);
  }
}
