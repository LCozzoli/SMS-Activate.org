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
exports.getPrices = void 0;
const comon_1 = require("../../../../ressources/comon");
// import { Countries } from '../../utils/countries';
// import { Services } from '../../utils/services';
class getPrices {
    // public countries?: Countries;
    // public services?: Services;
    getPrices(options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // if (typeof options.country == 'string')
            //   options.country = await this.countries?.toNumber(options.country);
            // if (options.service) options.service = this.services?.get(options.service);
            return (_a = this.query) === null || _a === void 0 ? void 0 : _a.makeCall(comon_1.EApiActions.getPrices, options);
        });
    }
}
exports.getPrices = getPrices;
//# sourceMappingURL=getPrices.js.map