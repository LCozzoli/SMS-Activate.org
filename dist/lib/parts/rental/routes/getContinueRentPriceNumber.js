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
exports.getContinueRentPriceNumber = void 0;
const comon_1 = require("../../../../ressources/comon");
const errors_1 = require("../../../../ressources/errors");
class getContinueRentPriceNumber {
    getContinueRentPriceNumber(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var _a;
                (_a = this.query) === null || _a === void 0 ? void 0 : _a.makeCall(comon_1.EApiActions.getContinueRentPriceNumber, options).then((response) => {
                    if (typeof response == 'object') {
                        if (response.status == 'success' && response.price)
                            return resolve(parseFloat(response.price));
                        if (response.message && errors_1.EApiErrors[response.message])
                            return reject(new Error(errors_1.EApiErrors[response.message]));
                    }
                    reject(response);
                }).catch((err) => reject(err));
            });
        });
    }
}
exports.getContinueRentPriceNumber = getContinueRentPriceNumber;
//# sourceMappingURL=getContinueRentPriceNumber.js.map