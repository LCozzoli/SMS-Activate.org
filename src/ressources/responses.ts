export interface IActiveActivation {
  activationId: string;
  serviceCode: string;
  phoneNumber: string;
  activationCost: number;
  activationStatus: number;
  smsCode: string;
  smsText: string;
  activationTime: Date;
  discount: number;
  repeated: boolean;
  countryCode: string;
  countryName: string;
  canGetAnotherSms: boolean;
}

export interface INumber {
  activationId: string;
  phoneNumber: string;
  activationCost?: number;
  countryCode?: string;
  canGetAnotherSms?: boolean;
  activationTime?: Date;
  activationOperator?: string;
}

export interface IMultiNumber {
  activation: string;
  phone: string;
  service: string;
}

export interface IOutGoingCall {
  date: string;
  phoneFrom: string;
  status: string;
}

export interface IOutGoingCalls {
  [key: string]: IOutGoingCall;
}

export interface IRentServicesAndCountries {
  countries: { [key: string]: number };
  operators: { [key: string]: string };
  services: { [key: string]: number };
}

export interface IRentedNumber {
  id: string;
  endDate: Date;
  number: string;
}

export interface IRentList {
  [key: string]: {
    id: string;
    phone: string;
  };
}

export interface IRentStatus {
  phoneFrom: string;
  text: string;
  service: string;
  date: Date;
}
