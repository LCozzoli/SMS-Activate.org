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
exports.getRentServicesAndCountries = void 0;
const comon_1 = require("../../../../ressources/comon");
class getRentServicesAndCountries {
    // public countries?: Countries;
    getRentServicesAndCountries(options) {
        return __awaiter(this, void 0, void 0, function* () {
            // if (options.country && typeof options.country == 'string')
            //   options.country = await this.countries?.toNumber(options.country);
            return new Promise((resolve, reject) => {
                var _a;
                (_a = this.query) === null || _a === void 0 ? void 0 : _a.makeCall(comon_1.EApiActions.getRentServicesAndCountries).then((response) => {
                    if (typeof response == 'object')
                        return resolve(response);
                    reject(response);
                }).catch((err) => reject(err));
            });
        });
    }
}
exports.getRentServicesAndCountries = getRentServicesAndCountries;
//# sourceMappingURL=getRentServicesAndCountries.js.map