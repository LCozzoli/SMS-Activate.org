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
exports.getStatus = void 0;
const comon_1 = require("../../../../ressources/comon");
const errors_1 = require("../../../../ressources/errors");
const status_1 = require("../../../../ressources/status");
class getStatus {
    getStatus(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var _a;
                if (typeof options == 'string' || typeof options == 'number')
                    options = { id: options };
                (_a = this.query) === null || _a === void 0 ? void 0 : _a.makeCall(comon_1.EApiActions.setStatus, options).then((res) => {
                    if (res.includes(':')) {
                        const data = res.split(':');
                        return resolve({
                            message: status_1.EActivationGetStatusAnswer[data[0]],
                            code: data[0],
                            data: data[1],
                        });
                    }
                    if (status_1.EActivationGetStatusAnswer[res])
                        return resolve({
                            message: status_1.EActivationGetStatusAnswer[res],
                            code: res,
                        });
                    if (errors_1.EApiErrors[res])
                        return reject(new Error(errors_1.EApiErrors[res]));
                    reject(res);
                }).catch((err) => reject(err));
            });
        });
    }
}
exports.getStatus = getStatus;
//# sourceMappingURL=getStatus.js.map