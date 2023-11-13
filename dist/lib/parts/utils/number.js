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
exports.SMSNumber = void 0;
const tsyringe_1 = require("tsyringe");
const typescript_mix_1 = require("typescript-mix");
const status_1 = require("../../../ressources/status");
const query_module_1 = require("../../query/query.module");
const setStatus_1 = require("../activations/routes/setStatus");
const utils_1 = require("./utils");
let SMSNumber = class SMSNumber {
    constructor(dataset, query, utils) {
        this.query = query;
        this.utils = utils;
        for (const key in dataset)
            this[key] = dataset[key];
        // aliases
        this.id = dataset.activationId;
        this.phone = dataset.phoneNumber;
        this.number = dataset.phoneNumber;
    }
    data() {
        return {
            activationId: this.activationId,
            phoneNumber: this.phoneNumber,
            countryCode: this.countryCode,
            activationCost: this.activationCost,
            canGetAnotherSms: this.canGetAnotherSms,
            activationTime: this.activationTime,
            activationOperator: this.activationOperator,
        };
    }
    getCode(tries = 180) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = this.utils) === null || _a === void 0 ? void 0 : _a.waitForCode(this.activationId, tries);
        });
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.setStatus({
                id: this.activationId,
                status: status_1.EActivationSetStatus.Ready,
            });
        });
    }
    failed() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.setStatus({
                id: this.activationId,
                status: status_1.EActivationSetStatus.Failed,
            });
        });
    }
    success() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.setStatus({
                id: this.activationId,
                status: status_1.EActivationSetStatus.Success,
            });
        });
    }
    requestAnother() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.setStatus({
                id: this.activationId,
                status: status_1.EActivationSetStatus.RequestAnotherCode,
            });
        });
    }
};
exports.SMSNumber = SMSNumber;
__decorate([
    (0, typescript_mix_1.use)(setStatus_1.setStatus),
    __metadata("design:type", Object)
], SMSNumber.prototype, "this", void 0);
exports.SMSNumber = SMSNumber = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [Object, query_module_1.Query,
        utils_1.Utils])
], SMSNumber);
//# sourceMappingURL=number.js.map