import { Query } from '../../query/query.module';
import { getStatus } from '../activations/routes/getStatus';
export interface waitForCode extends getStatus {
}
export declare class waitForCode {
    query: Query;
    waitForCode(id: string | number, tries?: number): Promise<string>;
}
//# sourceMappingURL=code.d.ts.map