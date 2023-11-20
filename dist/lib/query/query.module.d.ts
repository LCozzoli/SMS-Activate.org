import { EApiActions } from '../../ressources/comon';
import { IProxyOptions } from "../../ressources/options";
export declare class Query {
    private baseUrl;
    private apiKey;
    private proxy;
    setApiKey(baseUrl: string, apiKey?: string, proxy?: IProxyOptions): Promise<void>;
    makeCall(action: EApiActions, query?: Record<string, string | number | boolean>): Promise<any>;
}
//# sourceMappingURL=query.module.d.ts.map