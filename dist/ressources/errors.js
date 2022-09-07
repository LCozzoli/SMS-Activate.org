"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestErrors = exports.EApiErrors = void 0;
var EApiErrors;
(function (EApiErrors) {
    EApiErrors["BAD_KEY"] = "Incorrect API Key";
    EApiErrors["ERROR_SQL"] = "SMS Activate encountered a database error";
    EApiErrors["BAD_ACTION"] = "Incorrect action";
    EApiErrors["NO_BALANCE"] = "Not enough money on the balance";
    EApiErrors["NO_ACTIVATIONS"] = "Entries not found (no active activations)";
    EApiErrors["NO_NUMBERS"] = "No numbers available";
    EApiErrors["BAD_SERVICE"] = "Incorrect service";
    EApiErrors["BANNED"] = "Your account is temporary banned from the API";
    EApiErrors["WRONG_EXCEPTION_PHONE"] = "Incorrect exclusion prefixes";
    EApiErrors["NO_BALANCE_FORWARD"] = "Not enough funds to buy call forwarding";
    EApiErrors["BAD_STATUS"] = "Incorrect status";
    EApiErrors["INVALID_ACTIVATION_ID"] = "Incorrect activation ID";
    EApiErrors["WRONG_ADDITIONAL_SERVICE"] = "Incorrect additional service";
    EApiErrors["WRONG_ACTIVATION_ID"] = "Invalid Parent Activation ID";
    EApiErrors["WRONG_SECURITY"] = "An error occurred while trying to transfer an activation ID without forwarding, or a completed / inactive activation";
    EApiErrors["REPEAT_ADDITIONAL_SERVICE"] = "The error occurs when you try to order the purchased service again NO_BALANCE - Not enough funds";
    EApiErrors["RENEW_ACTIVATION_NOT_AVAILABLE"] = "The number is not available for additional activation";
    EApiErrors["NEW_ACTIVATION_IMPOSSIBLE"] = "It is impossible to make additional activation";
    EApiErrors["CALL_TASK_ALREADY_EXIST"] = "The task is already in the queue";
    EApiErrors["NUMBER_NOT_EXIST"] = "The number you are trying to call does not exist";
    EApiErrors["NO_ID_RENT"] = "The number id is not specified";
    EApiErrors["INCORECT_STATUS"] = "Incorrect status";
    EApiErrors["CANT_CANCEL"] = "The number cannot be canceled";
    EApiErrors["INVALID_PHONE"] = "Incorrect phone number";
    EApiErrors["ALREADY_FINISH"] = "The number is already finished";
    EApiErrors["ALREADY_CANCEL"] = "The number is already canceled";
    EApiErrors["RENT_DIE"] = "Rent cannot be extended because the number has expired";
    EApiErrors["WRONG_OPERATOR"] = "Incorrect operator";
})(EApiErrors = exports.EApiErrors || (exports.EApiErrors = {}));
var RequestErrors;
(function (RequestErrors) {
    RequestErrors["MissingApiKey"] = "API key is not defined";
})(RequestErrors = exports.RequestErrors || (exports.RequestErrors = {}));
//# sourceMappingURL=errors.js.map