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
exports.Countries = void 0;
const fs_1 = require("fs");
const os_1 = require("os");
const tsyringe_1 = require("tsyringe");
const comon_1 = require("../../../ressources/comon");
const helpers_1 = require("../../../ressources/helpers");
const query_module_1 = require("../../query/query.module");
let Countries = class Countries {
    constructor(query) {
        this.query = query;
        const COUNTRY_FILE = `${(0, os_1.tmpdir)()}/smsApi.countries.json`;
        if ((0, fs_1.existsSync)(COUNTRY_FILE)) {
            const data = (0, fs_1.readFileSync)(COUNTRY_FILE, 'utf8');
            try {
                this.list = JSON.parse(data);
            }
            catch (err) {
                console.log(err);
            }
        }
        if (!this.list ||
            !this.list.updatedAt ||
            this.list.updatedAt < Date.now() - 1000 * 60 * 60 * 24)
            this.update(COUNTRY_FILE);
    }
    update(file) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, helpers_1.sleep)(100);
            this.query.makeCall(comon_1.EApiActions.getCountries, null).then((res) => {
                try {
                    const countries = Object.values(res);
                    if (countries && countries.length) {
                        this.list = {
                            updatedAt: Date.now(),
                            countries,
                        };
                        (0, fs_1.writeFileSync)(file, JSON.stringify(this.list));
                    }
                }
                catch (err) {
                    throw err;
                }
            });
        });
    }
    awaitList() {
        return __awaiter(this, void 0, void 0, function* () {
            let count = 0;
            while (!this.list) {
                if (++count > 100)
                    throw new Error('Countries list cannot load. Check your internet connection.');
                yield (0, helpers_1.sleep)(100);
            }
        });
    }
    get(name, lang) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.awaitList();
            const lowered = name.toLowerCase();
            const country = this.list.countries.find((country) => !lang
                ? country.eng.toLowerCase() === lowered ||
                    country.rus.toLowerCase() === lowered ||
                    country.chn.toLowerCase() === lowered
                : country[lang].toLowerCase() === lowered);
            if (country)
                return country;
            throw new Error(`Country ${name} not found`);
        });
    }
    toNumber(name, lang) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield this.get(name, lang);
            return country.id;
        });
    }
};
exports.Countries = Countries;
exports.Countries = Countries = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [query_module_1.Query])
], Countries);
//# sourceMappingURL=countries.js.map