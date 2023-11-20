import { Activations } from './parts/activations/activations';
import { Rental } from './parts/rental/rental';
import { Utils } from './parts/utils/utils';
import { Query } from './query/query.module';
interface Base extends Activations, Rental {
}
interface ProxyInfo {
    protocol: string;
    ip: string;
    port: number;
    username?: string;
    password?: string;
}
declare class Base {
    baseUrl: string;
    apiKey?: string;
    proxy?: ProxyInfo;
    query?: Query;
    utils?: Utils;
    this: any;
    constructor(baseUrl: string, apiKey?: string, proxy?: ProxyInfo, query?: Query, utils?: Utils);
}
export declare class SMSActivate extends Base {
    utils: Utils;
    constructor(baseUrl: string, apiKey?: string, proxy?: ProxyInfo);
}
export {};
//# sourceMappingURL=index.d.ts.map