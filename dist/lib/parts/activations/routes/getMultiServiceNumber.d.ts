import { IGetMultiServiceNumberOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';
import { IMultiNumber } from '../../../../ressources/responses';
import { Services } from '../../utils/services';
export declare class getMultiServiceNumber {
    query?: Query;
    services?: Services;
    getMultiServiceNumber(options: IGetMultiServiceNumberOptions): Promise<IMultiNumber[]>;
}
//# sourceMappingURL=getMultiServiceNumber.d.ts.map