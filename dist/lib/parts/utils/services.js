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
exports.Services = void 0;
const fs_1 = require("fs");
const tsyringe_1 = require("tsyringe");
let Services = class Services {
    constructor() {
        this.services = [];
        const SERVICE_FILE = `${__dirname}/services.json`;
        if (!(0, fs_1.existsSync)(SERVICE_FILE))
            throw new Error('Services file not found.');
        try {
            const data = (0, fs_1.readFileSync)(SERVICE_FILE, 'utf8');
            this.services = JSON.parse(data);
        }
        catch (err) {
            throw err;
        }
    }
    get(name) {
        const lowered = name.toLowerCase();
        if (lowered.length == 2)
            return lowered;
        const services = this.services.filter((service) => service.name.toLowerCase().includes(lowered));
        if (services.length == 1)
            return services[0].code;
        if (services.length == 0)
            throw new Error(`Service not found: ${name}`);
        throw new Error(`Multiple services found: ${services
            .map((s) => `[${s.name}] (${s.code})`)
            .join(', ')}`);
    }
};
Services = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], Services);
exports.Services = Services;
//# sourceMappingURL=services.js.map