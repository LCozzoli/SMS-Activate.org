export declare enum EApiErrors {
    BAD_KEY = "Incorrect API Key",
    ERROR_SQL = "SMS Activate encountered a database error",
    BAD_ACTION = "Incorrect action",
    NO_BALANCE = "Not enough money on the balance",
    NO_ACTIVATIONS = "Entries not found (no active activations)",
    NO_NUMBERS = "No numbers available",
    BAD_SERVICE = "Incorrect service",
    BANNED = "Your account is temporary banned from the API",
    WRONG_EXCEPTION_PHONE = "Incorrect exclusion prefixes",
    NO_BALANCE_FORWARD = "Not enough funds to buy call forwarding",
    BAD_STATUS = "Incorrect status",
    INVALID_ACTIVATION_ID = "Incorrect activation ID",
    WRONG_ADDITIONAL_SERVICE = "Incorrect additional service",
    WRONG_ACTIVATION_ID = "Invalid Parent Activation ID",
    WRONG_SECURITY = "An error occurred while trying to transfer an activation ID without forwarding, or a completed / inactive activation",
    REPEAT_ADDITIONAL_SERVICE = "The error occurs when you try to order the purchased service again NO_BALANCE - Not enough funds",
    RENEW_ACTIVATION_NOT_AVAILABLE = "The number is not available for additional activation",
    NEW_ACTIVATION_IMPOSSIBLE = "It is impossible to make additional activation",
    CALL_TASK_ALREADY_EXIST = "The task is already in the queue",
    NUMBER_NOT_EXIST = "The number you are trying to call does not exist",
    NO_ID_RENT = "The number id is not specified",
    INCORECT_STATUS = "Incorrect status",
    CANT_CANCEL = "The number cannot be canceled",
    INVALID_PHONE = "Incorrect phone number",
    ALREADY_FINISH = "The number is already finished",
    ALREADY_CANCEL = "The number is already canceled",
    RENT_DIE = "Rent cannot be extended because the number has expired",
    WRONG_OPERATOR = "Incorrect operator"
}
export declare enum RequestErrors {
    MissingApiKey = "API key is not defined"
}
//# sourceMappingURL=errors.d.ts.map