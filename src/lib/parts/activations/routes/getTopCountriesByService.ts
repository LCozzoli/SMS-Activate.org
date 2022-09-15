import { EApiActions } from '../../../../ressources/comon';
import { IGetTopCountriesByServiceOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';
import { Services } from '../../utils/services';

export class getTopCountriesByService {
  public query?: Query;
  public services?: Services;

  /**
   * Request for top countries by service
   * @param service service as a string
   * @param freePrice operators as string array
   */
  async getTopCountriesByService(options: IGetTopCountriesByServiceOptions) {
    if (options.service) options.service = this.services?.get(options.service);
    return this.query?.makeCall(EApiActions.getTopCountriesByService, options);
  }
}
