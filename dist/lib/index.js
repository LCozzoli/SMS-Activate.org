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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSActivate = void 0;
const tsyringe_1 = require("tsyringe");
const typescript_mix_1 = require("typescript-mix");
const activations_1 = require("./parts/activations/activations");
const rental_1 = require("./parts/rental/rental");
const utils_1 = require("./parts/utils/utils");
const countries_1 = require("./parts/utils/countries");
const query_module_1 = require("./query/query.module");
const services_1 = require("./parts/utils/services");
let Base = class Base {
    constructor(apiKey, query, countries, services, utils) {
        this.apiKey = apiKey;
        this.query = query;
        this.countries = countries;
        this.services = services;
        this.utils = utils;
        query === null || query === void 0 ? void 0 : query.setApiKey(apiKey);
    }
};
__decorate([
    (0, typescript_mix_1.use)(activations_1.Activations, rental_1.Rental),
    __metadata("design:type", Object)
], Base.prototype, "this", void 0);
Base = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [String, query_module_1.Query,
        countries_1.Countries,
        services_1.Services,
        utils_1.Utils])
], Base);
class SMSActivate extends Base {
    constructor(apiKey) {
        super(apiKey);
    }
}
exports.SMSActivate = SMSActivate;
//# sourceMappingURL=index.js.map