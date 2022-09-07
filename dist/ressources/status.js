"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERentalSatus = exports.EIncomingCallStatus = exports.EActivationGetStatusAnswer = exports.EActivationSetStatusAnswer = exports.EActivationSetStatus = void 0;
var EActivationSetStatus;
(function (EActivationSetStatus) {
    EActivationSetStatus[EActivationSetStatus["Sent"] = 1] = "Sent";
    EActivationSetStatus[EActivationSetStatus["RequestAnotherCode"] = 3] = "RequestAnotherCode";
    EActivationSetStatus[EActivationSetStatus["Success"] = 6] = "Success";
    EActivationSetStatus[EActivationSetStatus["Failed"] = 8] = "Failed";
})(EActivationSetStatus = exports.EActivationSetStatus || (exports.EActivationSetStatus = {}));
var EActivationSetStatusAnswer;
(function (EActivationSetStatusAnswer) {
    EActivationSetStatusAnswer["ACCESS_READY"] = "API is listening for the code";
    EActivationSetStatusAnswer["ACCESS_RETRY_GET"] = "Waiting for a new SMS";
    EActivationSetStatusAnswer["ACCESS_ACTIVATION"] = "Activation success received";
    EActivationSetStatusAnswer["ACCESS_CANCEL"] = "Activation failure received";
})(EActivationSetStatusAnswer = exports.EActivationSetStatusAnswer || (exports.EActivationSetStatusAnswer = {}));
var EActivationGetStatusAnswer;
(function (EActivationGetStatusAnswer) {
    EActivationGetStatusAnswer["STATUS_WAIT_CODE"] = "Waiting for a code";
    EActivationGetStatusAnswer["STATUS_WAIT_RETRY"] = "Waiting for code clarification";
    EActivationGetStatusAnswer["STATUS_WAIT_RESEND"] = "Waiting for a new SMS";
    EActivationGetStatusAnswer["STATUS_CANCEL"] = "Activation failure";
    EActivationGetStatusAnswer["STATUS_OK"] = "Activation success";
})(EActivationGetStatusAnswer = exports.EActivationGetStatusAnswer || (exports.EActivationGetStatusAnswer = {}));
var EIncomingCallStatus;
(function (EIncomingCallStatus) {
    EIncomingCallStatus[EIncomingCallStatus["NewActivation"] = 2] = "NewActivation";
    EIncomingCallStatus[EIncomingCallStatus["ActivationSuccess"] = 3] = "ActivationSuccess";
    EIncomingCallStatus[EIncomingCallStatus["ActivationFailure"] = 4] = "ActivationFailure";
    EIncomingCallStatus[EIncomingCallStatus["ReturnedCall"] = 5] = "ReturnedCall";
})(EIncomingCallStatus = exports.EIncomingCallStatus || (exports.EIncomingCallStatus = {}));
var ERentalSatus;
(function (ERentalSatus) {
    ERentalSatus[ERentalSatus["Finish"] = 1] = "Finish";
    ERentalSatus[ERentalSatus["Cancel"] = 2] = "Cancel";
})(ERentalSatus = exports.ERentalSatus || (exports.ERentalSatus = {}));
//# sourceMappingURL=status.js.map