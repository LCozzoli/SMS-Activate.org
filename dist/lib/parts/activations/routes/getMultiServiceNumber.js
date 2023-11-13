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
exports.getMultiServiceNumber = void 0;
const comon_1 = require("../../../../ressources/comon");
class getMultiServiceNumber {
    getMultiServiceNumber(options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof options.country == 'string')
                options.country = yield ((_a = this.countries) === null || _a === void 0 ? void 0 : _a.toNumber(options.country));
            if (options.service)
                options.service = (_b = this.services) === null || _b === void 0 ? void 0 : _b.get(options.service);
            return new Promise((resolve, reject) => {
                var _a;
                (_a = this.query) === null || _a === void 0 ? void 0 : _a.makeCall(comon_1.EApiActions.getMultiServiceNumber, options).then((response) => {
                    if (typeof response == 'object')
                        return resolve(response);
                    reject(response);
                }).catch((err) => reject(err));
            });
        });
    }
}
exports.getMultiServiceNumber = getMultiServiceNumber;
//# sourceMappingURL=getMultiServiceNumber.js.map