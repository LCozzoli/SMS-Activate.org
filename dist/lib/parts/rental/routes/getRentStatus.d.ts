import { IGetRentStatusOptions } from '../../../../ressources/options';
import { IRentStatus } from '../../../../ressources/responses';
import { Query } from '../../../query/query.module';
export declare class getRentStatus {
    query?: Query;
    getRentStatus(options: IGetRentStatusOptions | string | number): Promise<IRentStatus[]>;
}
//# sourceMappingURL=getRentStatus.d.ts.map