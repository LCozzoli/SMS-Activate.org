import { IGetIncomingCallStatusOptions } from '../../../../ressources/options';
import { IStatusResponse } from '../../../../ressources/status';
import { Query } from '../../../query/query.module';
export declare class getIncomingCallStatus {
    query?: Query;
    getIncomingCallStatus(options: IGetIncomingCallStatusOptions | string | number): Promise<IStatusResponse>;
}
//# sourceMappingURL=getIncomingCallStatus.d.ts.map