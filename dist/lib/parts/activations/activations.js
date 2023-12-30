"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activations = void 0;
const typescript_mix_1 = require("typescript-mix");
const checkExtraActivation_1 = require("./routes/checkExtraActivation");
const createTaskForCall_1 = require("./routes/createTaskForCall");
const getActiveActivations_1 = require("./routes/getActiveActivations");
const getAdditionalService_1 = require("./routes/getAdditionalService");
const getBalance_1 = require("./routes/getBalance");
const getBalanceAndCashBack_1 = require("./routes/getBalanceAndCashBack");
const getExtraActivation_1 = require("./routes/getExtraActivation");
const getIncomingCallStatus_1 = require("./routes/getIncomingCallStatus");
const getMultiServiceNumber_1 = require("./routes/getMultiServiceNumber");
const getNumbersStatus_1 = require("./routes/getNumbersStatus");
const getNumberV2_1 = require("./routes/getNumberV2");
const getOutgoingCalls_1 = require("./routes/getOutgoingCalls");
const getPrices_1 = require("./routes/getPrices");
const getStatus_1 = require("./routes/getStatus");
const getTopCountriesByService_1 = require("./routes/getTopCountriesByService");
const setStatus_1 = require("./routes/setStatus");
class Activations {
}
__decorate([
    (0, typescript_mix_1.use)(getNumbersStatus_1.getNumbersStatus, getTopCountriesByService_1.getTopCountriesByService, getBalance_1.getBalance, getBalanceAndCashBack_1.getBalanceAndCashBack, getActiveActivations_1.getActiveActivations, getNumberV2_1.getNumberV2, getMultiServiceNumber_1.getMultiServiceNumber, setStatus_1.setStatus, getStatus_1.getStatus, getPrices_1.getPrices, getIncomingCallStatus_1.getIncomingCallStatus, getAdditionalService_1.getAdditionalService, getExtraActivation_1.getExtraActivation, checkExtraActivation_1.checkExtraActivation, createTaskForCall_1.createTaskForCall, getOutgoingCalls_1.getOutgoingCalls),
    __metadata("design:type", Object)
], Activations.prototype, "this", void 0);
exports.Activations = Activations;
//# sourceMappingURL=activations.js.map