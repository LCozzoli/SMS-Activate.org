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
exports.getNumberV2 = void 0;
const comon_1 = require("../../../../ressources/comon");
const number_1 = require("../../utils/number");
class getNumberV2 {
    /**
     * Order a phone number for verification
     * @param options Options as IGetNumberOptions
     * @param options.service Service as string
     * @param options.country Country as string or number, if string it'll be converted to number
     * @param options.forward * Forward code as string
     * @param options.freePrice * Free price as number
     * @param options.maxPrice * Maximum price as number
     * @param options.phoneException * Phone prefix exception as string separated by commas
     * @param options.operator * Operator separated by commas as string
     * @param options.verification * If true, get a number able to receive calls
     * @param options.ref * Referral ID as string
     * @returns Phone number as string
     * */
    getNumberV2(options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (options.phoneException)
                options.phoneException = '1';
            if (typeof options.country == 'string')
                options.country = yield ((_a = this.countries) === null || _a === void 0 ? void 0 : _a.toNumber(options.country));
            if (options.service)
                options.service = (_b = this.services) === null || _b === void 0 ? void 0 : _b.get(options.service);
            return new Promise((resolve, reject) => {
                var _a;
                (_a = this.query) === null || _a === void 0 ? void 0 : _a.makeCall(comon_1.EApiActions.getNumber, options).then((response) => {
                    if (typeof response == 'object') {
                        return resolve(new number_1.SMSNumber({
                            activationId: response.activationId,
                            phoneNumber: response.phoneNumber,
                            activationCost: parseFloat(response.activationCost),
                            activationTime: new Date(response.activationTime),
                            activationOperator: response.activationOperator,
                            countryCode: response.countryCode,
                            canGetAnotherSms: response.canGetAnotherSms === '1',
                        }));
                    }
                    if (typeof response == 'string') {
                        if (response.includes('ACCESS_NUMBER')) {
                            const elements = response.split(':');
                            return resolve(new number_1.SMSNumber({
                                activationId: elements[1],
                                phoneNumber: elements[2],
                            }));
                        }
                    }
                    reject(response);
                }).catch((err) => reject(err));
            });
        });
    }
    getNumber(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getNumberV2(options);
        });
    }
}
exports.getNumberV2 = getNumberV2;
//# sourceMappingURL=getNumberV2.js.map