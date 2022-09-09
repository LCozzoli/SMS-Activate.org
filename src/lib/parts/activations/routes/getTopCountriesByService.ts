import { EApiActions } from '../../../../ressources/comon';
import { IGetTopCountriesByServiceOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';

export class getTopCountriesByService {
  public query?: Query;

  /**
   * Request for top countries by service
   * @param service service as a string
   * @param freePrice operators as string array
   */
  async getTopCountriesByService(options: IGetTopCountriesByServiceOptions) {
    return this.query?.makeCall(EApiActions.getTopCountriesByService, options);
  }
}
