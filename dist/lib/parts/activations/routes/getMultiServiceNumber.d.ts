import { IGetMultiServiceNumberOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';
import { Countries } from '../../utils/countries';
import { IMultiNumber } from '../../../../ressources/responses';
import { Services } from '../../utils/services';
export declare class getMultiServiceNumber {
    query?: Query;
    countries?: Countries;
    services?: Services;
    getMultiServiceNumber(options: IGetMultiServiceNumberOptions): Promise<IMultiNumber[]>;
}
//# sourceMappingURL=getMultiServiceNumber.d.ts.map