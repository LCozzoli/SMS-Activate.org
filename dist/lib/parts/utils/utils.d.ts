import { waitForCode } from './code';
import { Countries } from './countries';
import { Services } from './services';
import { Query } from '../../query/query.module';
export interface Utils extends waitForCode {
}
export declare class Utils {
    countries: Countries;
    services: Services;
    readonly query: Query;
    this: any;
    constructor(countries: Countries, services: Services, query: Query);
}
//# sourceMappingURL=utils.d.ts.map