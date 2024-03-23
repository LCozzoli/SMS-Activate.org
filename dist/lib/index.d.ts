import { Activations } from './parts/activations/activations';
import { Rental } from './parts/rental/rental';
import { Utils } from './parts/utils/utils';
import { Countries } from './parts/utils/countries';
import { Query } from './query/query.module';
import { Services } from './parts/utils/services';
interface Base extends Activations, Rental {
}
declare class Base {
    apiKey?: string;
    query?: Query;
    countries?: Countries;
    services?: Services;
    utils?: Utils;
    this: any;
    constructor(apiKey?: string, query?: Query, countries?: Countries, services?: Services, utils?: Utils);
}
export declare class SMSActivate extends Base {
    utils: Utils;
    constructor(apiKey?: string);
}
export {};
//# sourceMappingURL=index.d.ts.map