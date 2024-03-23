import { EApiActions } from '../../ressources/comon';
export declare class Query {
    private apiKey;
    setApiKey(apiKey?: string): Promise<void>;
    makeCall(action: EApiActions, query?: Record<string, string | number | boolean>): any;
}
//# sourceMappingURL=query.module.d.ts.map