export interface IStatusResponse {
  message: string;
  code: string;
  data?: string;
}

export enum EActivationSetStatus {
  Ready = 1,
  RequestAnotherCode = 3,
  Success = 6,
  Failed = 8,
}

export enum EActivationSetStatusAnswer {
  ACCESS_READY = 'API is listening for the code',
  ACCESS_RETRY_GET = 'Waiting for a new SMS',
  ACCESS_ACTIVATION = 'Activation success received',
  ACCESS_CANCEL = 'Activation failure received',
}

export enum EActivationGetStatusAnswer {
  STATUS_WAIT_CODE = 'Waiting for a code',
  STATUS_WAIT_RETRY = 'Waiting for code clarification',
  STATUS_WAIT_RESEND = 'Waiting for a new SMS',
  STATUS_CANCEL = 'Activation failure',
  STATUS_OK = 'Activation success',
}

export enum EIncomingCallStatus {
  NewActivation = 2,
  ActivationSuccess = 3,
  ActivationFailure = 4,
  ReturnedCall = 5,
}

export enum ERentalSatus {
  Finish = 1,
  Cancel = 2,
}
