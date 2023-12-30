import { INumber } from '../../../ressources/responses';
import { Query } from '../../query/query.module';
import { setStatus } from '../activations/routes/setStatus';
import { Utils } from './utils';
export interface SMSNumber extends setStatus {
}
export declare class SMSNumber {
    readonly query?: Query;
    private readonly utils?;
    id: string;
    phone: string;
    number: string;
    activationId: string;
    phoneNumber: string;
    countryCode: string;
    activationCost: number;
    canGetAnotherSms: boolean;
    activationTime: Date;
    activationOperator: string;
    this: any;
    constructor(dataset: INumber, query?: Query, utils?: Utils);
    data(): INumber;
    getCode(tries?: number): Promise<string>;
    ready(): Promise<import("../../../ressources/status").IStatusResponse>;
    failed(): Promise<import("../../../ressources/status").IStatusResponse>;
    success(): Promise<import("../../../ressources/status").IStatusResponse>;
    requestAnother(): Promise<import("../../../ressources/status").IStatusResponse>;
}
//# sourceMappingURL=number.d.ts.map