import { IGetStatusOptions } from '../../../../ressources/options';
import { IStatusResponse } from '../../../../ressources/status';
import { Query } from '../../../query/query.module';
export declare class getStatus {
    query?: Query;
    getStatus(options: IGetStatusOptions | string | number): Promise<IStatusResponse>;
}
//# sourceMappingURL=getStatus.d.ts.map