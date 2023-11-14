"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EApiActions = exports.BASE_URL = void 0;
exports.BASE_URL = `http://api.sms-activate.org/stubs/handler_api.php`;
var EApiActions;
(function (EApiActions) {
    // Activations API
    EApiActions[EApiActions["getNumbersStatus"] = 0] = "getNumbersStatus";
    EApiActions[EApiActions["getTopCountriesByService"] = 1] = "getTopCountriesByService";
    EApiActions[EApiActions["getBalance"] = 2] = "getBalance";
    EApiActions[EApiActions["getBalanceAndCashBack"] = 3] = "getBalanceAndCashBack";
    EApiActions[EApiActions["getOperators"] = 4] = "getOperators";
    EApiActions[EApiActions["getActiveActivations"] = 5] = "getActiveActivations";
    EApiActions[EApiActions["getNumber"] = 6] = "getNumber";
    EApiActions[EApiActions["getMultiServiceNumber"] = 7] = "getMultiServiceNumber";
    EApiActions[EApiActions["setStatus"] = 8] = "setStatus";
    EApiActions[EApiActions["getStatus"] = 9] = "getStatus";
    EApiActions[EApiActions["getIncomingCallStatus"] = 10] = "getIncomingCallStatus";
    EApiActions[EApiActions["getPrices"] = 11] = "getPrices";
    EApiActions[EApiActions["getCountries"] = 12] = "getCountries";
    EApiActions[EApiActions["getAdditionalService"] = 13] = "getAdditionalService";
    EApiActions[EApiActions["getExtraActivation"] = 14] = "getExtraActivation";
    EApiActions[EApiActions["checkExtraActivation"] = 15] = "checkExtraActivation";
    EApiActions[EApiActions["createTaskForCall"] = 16] = "createTaskForCall";
    EApiActions[EApiActions["getOutgoingCalls"] = 17] = "getOutgoingCalls";
    // Rental API
    EApiActions[EApiActions["getRentServicesAndCountries"] = 18] = "getRentServicesAndCountries";
    EApiActions[EApiActions["getRentNumber"] = 19] = "getRentNumber";
    EApiActions[EApiActions["getRentStatus"] = 20] = "getRentStatus";
    EApiActions[EApiActions["setRentStatus"] = 21] = "setRentStatus";
    EApiActions[EApiActions["getRentList"] = 22] = "getRentList";
    EApiActions[EApiActions["continueRentNumber"] = 23] = "continueRentNumber";
    EApiActions[EApiActions["getContinueRentPriceNumber"] = 24] = "getContinueRentPriceNumber";
})(EApiActions || (exports.EApiActions = EApiActions = {}));
//# sourceMappingURL=comon.js.map