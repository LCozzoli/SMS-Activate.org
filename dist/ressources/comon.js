"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EApiActions = exports.BASE_URL = void 0;
exports.BASE_URL = `https://api.sms-activate.org/stubs/handler_api.php`;
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
    EApiActions[EApiActions["getNumberV2"] = 7] = "getNumberV2";
    EApiActions[EApiActions["getMultiServiceNumber"] = 8] = "getMultiServiceNumber";
    EApiActions[EApiActions["setStatus"] = 9] = "setStatus";
    EApiActions[EApiActions["getStatus"] = 10] = "getStatus";
    EApiActions[EApiActions["getIncomingCallStatus"] = 11] = "getIncomingCallStatus";
    EApiActions[EApiActions["getPrices"] = 12] = "getPrices";
    EApiActions[EApiActions["getCountries"] = 13] = "getCountries";
    EApiActions[EApiActions["getAdditionalService"] = 14] = "getAdditionalService";
    EApiActions[EApiActions["getExtraActivation"] = 15] = "getExtraActivation";
    EApiActions[EApiActions["checkExtraActivation"] = 16] = "checkExtraActivation";
    EApiActions[EApiActions["createTaskForCall"] = 17] = "createTaskForCall";
    EApiActions[EApiActions["getOutgoingCalls"] = 18] = "getOutgoingCalls";
    // Rental API
    EApiActions[EApiActions["getRentServicesAndCountries"] = 19] = "getRentServicesAndCountries";
    EApiActions[EApiActions["getRentNumber"] = 20] = "getRentNumber";
    EApiActions[EApiActions["getRentStatus"] = 21] = "getRentStatus";
    EApiActions[EApiActions["setRentStatus"] = 22] = "setRentStatus";
    EApiActions[EApiActions["getRentList"] = 23] = "getRentList";
    EApiActions[EApiActions["continueRentNumber"] = 24] = "continueRentNumber";
    EApiActions[EApiActions["getContinueRentPriceNumber"] = 25] = "getContinueRentPriceNumber";
})(EApiActions = exports.EApiActions || (exports.EApiActions = {}));
//# sourceMappingURL=comon.js.map