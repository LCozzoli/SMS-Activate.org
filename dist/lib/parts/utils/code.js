"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.waitForCode = void 0;
const typescript_mix_1 = require("typescript-mix");
const helpers_1 = require("../../../ressources/helpers");
const status_1 = require("../../../ressources/status");
const getStatus_1 = require("../activations/routes/getStatus");
class waitForCode {
    waitForCode(id, tries = 180) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                while (tries--) {
                    const result = yield this.getStatus(id);
                    if (result.message == status_1.EActivationGetStatusAnswer.STATUS_OK ||
                        result.message == status_1.EActivationGetStatusAnswer.STATUS_UNEXPECTED)
                        return resolve(result.data);
                    if (result.message != status_1.EActivationGetStatusAnswer.STATUS_WAIT_CODE)
                        return reject(result.code);
                    yield (0, helpers_1.sleep)(1000);
                }
                reject('EXPIRED');
            }));
        });
    }
}
exports.waitForCode = waitForCode;
__decorate([
    (0, typescript_mix_1.use)(getStatus_1.getStatus),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], waitForCode.prototype, "waitForCode", null);
//# sourceMappingURL=code.js.map