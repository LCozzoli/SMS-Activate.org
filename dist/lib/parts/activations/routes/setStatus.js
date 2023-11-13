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
exports.setStatus = void 0;
const comon_1 = require("../../../../ressources/comon");
const status_1 = require("../../../../ressources/status");
class setStatus {
    setStatus(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var _a;
                (_a = this.query) === null || _a === void 0 ? void 0 : _a.makeCall(comon_1.EApiActions.setStatus, options).then((res) => {
                    if (status_1.EActivationSetStatusAnswer[res])
                        return resolve({
                            message: status_1.EActivationSetStatusAnswer[res],
                            code: res,
                        });
                    reject(res);
                }).catch((err) => reject(err));
            });
        });
    }
}
exports.setStatus = setStatus;
//# sourceMappingURL=setStatus.js.map