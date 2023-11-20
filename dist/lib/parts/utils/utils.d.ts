import { waitForCode } from './code';
import { Services } from './services';
import { Query } from '../../query/query.module';
export interface Utils extends waitForCode {
}
export declare class Utils {
    services: Services;
    readonly query: Query;
    this: any;
    constructor(services: Services, query: Query);
}
//# sourceMappingURL=utils.d.ts.map