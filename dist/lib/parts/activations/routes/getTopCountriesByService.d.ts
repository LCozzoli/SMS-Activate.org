import { IGetTopCountriesByServiceOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';
import { Services } from '../../utils/services';
export declare class getTopCountriesByService {
    query?: Query;
    services?: Services;
    /**
     * Request for top countries by service
     * @param service service as a string
     * @param freePrice operators as string array
     */
    getTopCountriesByService(options: IGetTopCountriesByServiceOptions): Promise<any>;
}
//# sourceMappingURL=getTopCountriesByService.d.ts.map