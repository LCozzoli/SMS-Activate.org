export interface IStatusResponse {
    message: string;
    code: string;
    data?: string;
}
export declare enum EActivationSetStatus {
    Ready = 1,
    RequestAnotherCode = 3,
    Success = 6,
    Failed = 8
}
export declare enum EActivationSetStatusAnswer {
    ACCESS_READY = "API is listening for the code",
    ACCESS_RETRY_GET = "Waiting for a new SMS",
    ACCESS_ACTIVATION = "Activation success received",
    ACCESS_CANCEL = "Activation failure received"
}
export declare enum EActivationGetStatusAnswer {
    STATUS_WAIT_CODE = "Waiting for a code",
    STATUS_WAIT_RETRY = "Waiting for code clarification",
    STATUS_WAIT_RESEND = "Waiting for a new SMS",
    STATUS_CANCEL = "Activation failure",
    STATUS_OK = "Activation success",
    STATUS_UNEXPECTED = "Unexpected status response"
}
export declare enum EIncomingCallStatus {
    NewActivation = 2,
    ActivationSuccess = 3,
    ActivationFailure = 4,
    ReturnedCall = 5
}
export declare enum ERentalSatus {
    Finish = 1,
    Cancel = 2
}
//# sourceMappingURL=status.d.ts.map