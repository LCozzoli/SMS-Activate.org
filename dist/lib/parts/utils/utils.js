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
exports.Utils = void 0;
const tsyringe_1 = require("tsyringe");
const typescript_mix_1 = require("typescript-mix");
const code_1 = require("./code");
// import { Countries } from './countries';
// import { Services } from './services';
const query_module_1 = require("../../query/query.module");
let Utils = class Utils {
    constructor(
    // public countries: Countries,
    // public services: Services,
    query) {
        this.query = query;
    }
};
exports.Utils = Utils;
__decorate([
    (0, typescript_mix_1.use)(code_1.waitForCode),
    __metadata("design:type", Object)
], Utils.prototype, "this", void 0);
exports.Utils = Utils = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [query_module_1.Query])
], Utils);
//# sourceMappingURL=utils.js.map