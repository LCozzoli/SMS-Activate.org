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
exports.getIncomingCallStatus = void 0;
const comon_1 = require("../../../../ressources/comon");
const status_1 = require("../../../../ressources/status");
class getIncomingCallStatus {
    getIncomingCallStatus(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let opts;
            if (typeof options == 'string' || typeof options == 'number')
                opts = { id: options };
            else
                opts = options;
            return new Promise((resolve, reject) => {
                var _a;
                (_a = this.query) === null || _a === void 0 ? void 0 : _a.makeCall(comon_1.EApiActions.getIncomingCallStatus, opts).then((res) => {
                    if (typeof res == 'object') {
                        if (res.status && status_1.EActivationSetStatusAnswer[res.status])
                            return resolve({
                                message: status_1.EActivationSetStatusAnswer[res.status],
                                code: res.status,
                                data: res.phone,
                            });
                    }
                    reject(res);
                }).catch((err) => reject(err));
            });
        });
    }
}
exports.getIncomingCallStatus = getIncomingCallStatus;
//# sourceMappingURL=getIncomingCallStatus.js.map