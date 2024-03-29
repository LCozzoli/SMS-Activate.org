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
class getPrices {
    getPrices(options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof options.country == 'string')
                options.country = yield ((_a = this.countries) === null || _a === void 0 ? void 0 : _a.toNumber(options.country));
            if (options.service)
                options.service = (_b = this.services) === null || _b === void 0 ? void 0 : _b.get(options.service);
            return (_c = this.query) === null || _c === void 0 ? void 0 : _c.makeCall(comon_1.EApiActions.getPrices, options);
        });
    }
}
exports.getPrices = getPrices;
//# sourceMappingURL=getPrices.js.map