"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActiveActivations = void 0;
const errors_1 = require("../../../../ressources/errors");
const comon_1 = require("../../../../ressources/comon");
class getActiveActivations {
    getActiveActivations() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var _a;
                (_a = this.query) === null || _a === void 0 ? void 0 : _a.makeCall(comon_1.EApiActions.getActiveActivations).then((response) => {
                    if (response.status) {
                        const activations = response.activeActivations || [];
                        return resolve(activations.map((activation) => {
                            return {
                                activationId: activation.activationId,
                                serviceCode: activation.serviceCode,
                                phoneNumber: activation.phoneNumber,
                                activationCost: activation.activationCost
                                    ? parseFloat(activation.activationCost)
                                    : 0,
                                activationStatus: activation.activationStatus
                                    ? parseInt(activation.activationStatus, 10)
                                    : 0,
                                discount: activation.discount
                                    ? parseFloat(activation.discount)
                                    : 0,
                                repeated: activation.repeated && activation.repeated === '1',
                                smsCode: activation.smsCode,
                                smsText: activation.smsText,
                                activationTime: activation.activationTime
                                    ? new Date(activation.activationTime)
                                    : undefined,
                                countryCode: activation.countryCode,
                                countryName: activation.countryName,
                                canGetAnotherSms: activation.canGetAnotherSms &&
                                    activation.canGetAnotherSms === '1',
                            };
                        }));
                    }
                    if (errors_1.EApiErrors[response])
                        return reject(new Error(errors_1.EApiErrors[response]));
                    reject(response);
                }).catch((err) => reject(err));
            });
        });
    }
}
exports.getActiveActivations = getActiveActivations;
//# sourceMappingURL=getActiveActivations.js.map