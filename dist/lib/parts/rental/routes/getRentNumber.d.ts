import { IGetRentNumberOptions } from '../../../../ressources/options';
import { IRentedNumber } from '../../../../ressources/responses';
import { Query } from '../../../query/query.module';
import { Services } from '../../utils/services';
export declare class getRentNumber {
    query?: Query;
    services?: Services;
    getRentNumber(options: IGetRentNumberOptions): Promise<IRentedNumber>;
}
//# sourceMappingURL=getRentNumber.d.ts.map