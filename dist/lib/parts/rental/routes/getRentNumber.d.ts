import { IGetRentNumberOptions } from '../../../../ressources/options';
import { IRentedNumber } from '../../../../ressources/responses';
import { Countries } from '../../utils/countries';
import { Query } from '../../../query/query.module';
import { Services } from '../../utils/services';
export declare class getRentNumber {
    query?: Query;
    countries?: Countries;
    services?: Services;
    getRentNumber(options: IGetRentNumberOptions): Promise<IRentedNumber>;
}
//# sourceMappingURL=getRentNumber.d.ts.map