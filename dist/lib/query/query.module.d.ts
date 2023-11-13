import { EApiActions } from '../../ressources/comon';
export declare class Query {
    private baseUrl;
    private apiKey;
    setApiKey(baseUrl: string, apiKey?: string): Promise<void>;
    makeCall(action: EApiActions, query?: Record<string, string | number | boolean>): any;
}
//# sourceMappingURL=query.module.d.ts.map