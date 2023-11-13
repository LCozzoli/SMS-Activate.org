import { IGetPricesOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';
import { Countries } from '../../utils/countries';
import { Services } from '../../utils/services';
export declare class getPrices {
    query?: Query;
    countries?: Countries;
    services?: Services;
    getPrices(options: IGetPricesOptions): Promise<any>;
}
//# sourceMappingURL=getPrices.d.ts.map