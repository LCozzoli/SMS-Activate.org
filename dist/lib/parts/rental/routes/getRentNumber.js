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
exports.getRentNumber = void 0;
const comon_1 = require("../../../../ressources/comon");
class getRentNumber {
    getRentNumber(options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // if (options.country && typeof options.country == 'string')
            //   options.country = await this.countries?.toNumber(options.country);
            if (options.service)
                options.service = (_a = this.services) === null || _a === void 0 ? void 0 : _a.get(options.service);
            return new Promise((resolve, reject) => {
                var _a;
                (_a = this.query) === null || _a === void 0 ? void 0 : _a.makeCall(comon_1.EApiActions.getRentNumber).then((response) => {
                    if (typeof response == 'object' && response.status == 'success')
                        return resolve({
                            id: response.phone.id,
                            endDate: new Date(response.phone.endDate),
                            number: response.phone.number,
                        });
                    reject(response);
                }).catch((err) => reject(err));
            });
        });
    }
}
exports.getRentNumber = getRentNumber;
//# sourceMappingURL=getRentNumber.js.map