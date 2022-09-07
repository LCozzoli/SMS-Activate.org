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
exports.getTopCountriesByService = void 0;
const comon_1 = require("../../../../ressources/comon");
class getTopCountriesByService {
    /**
     * Request for top countries by service
     * @param service service as a string
     * @param freePrice operators as string array
     */
    getTopCountriesByService(options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = this.query) === null || _a === void 0 ? void 0 : _a.makeCall(comon_1.EApiActions.getNumbersStatus, options);
        });
    }
}
exports.getTopCountriesByService = getTopCountriesByService;
//# sourceMappingURL=getTopCountriesByService.js.map