import { EActivationSetStatus, ERentalSatus } from './status';
export interface IBasicID extends Record<string, string | number> {
    id: string | number;
}
export interface IGetNumberOptions extends Record<string, string | number | boolean> {
    service: string;
    country: number | string;
    forward?: string;
    freePrice?: number;
    maxPrice?: number;
    phoneException?: string;
    operator?: string;
    verification?: boolean;
    ref?: string;
}
export interface IGetMultiServiceNumberOptions extends Record<string, string | number> {
    service: string;
    country: number | string;
    operator?: string;
    ref?: string;
    forward?: string;
}
export interface IGetStatusOptions extends IBasicID {
}
export interface IGetTopCountriesByServiceOptions extends Record<string, string | number> {
    service: string;
    freePrice?: number;
}
export interface ISetStatusOptions extends Record<string, string | number> {
    id: string | number;
    forward?: string;
    status?: EActivationSetStatus;
}
export interface IGetPricesOptions extends Record<string, string | number> {
    service?: string;
    country?: number | string;
}
export interface IGetIncomingCallStatusOptions extends IBasicID {
}
export interface IGetAdditionalServiceOptions extends IBasicID {
    service: string;
}
export interface IGetExtraActivationOptions extends Record<string, string | number> {
    activationId: string;
}
export interface ICheckExtraActivationOptions extends Record<string, string | number> {
    activationId: string;
}
export interface ICreateTaskForCallOptions extends Record<string, string | number> {
    activationId: string;
    phone: string;
}
export interface IIGetOutgoingCallsOptions {
    activationId: string;
    date?: string | Date;
}
export interface IGetOutgoingCallsOptions extends Record<string, string | number> {
    activationId: string;
    date?: string;
}
export interface IRentServicesAndCountriesOptions extends Record<string, string | number> {
    time?: number;
    operator?: string;
    country?: number | string;
}
export interface IGetRentNumberOptions extends Record<string, string | number> {
    service: string;
    time?: number;
    operator?: string;
    country?: number | string;
    url?: string;
}
export interface IGetRentStatusOptions extends IBasicID {
}
export interface ISetRentStatusOptions extends IBasicID {
    status: number | ERentalSatus;
}
export interface IContinueRentNumberOptions extends IBasicID {
    rent_time?: number;
}
export interface IContinueRentNumberPriceOptions extends IBasicID {
}
//# sourceMappingURL=options.d.ts.map