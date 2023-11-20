"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
const comon_1 = require("../../ressources/comon");
const tsyringe_1 = require("tsyringe");
const errors_1 = require("../../ressources/errors");
const axios_1 = __importDefault(require("axios"));
const https_proxy_agent_1 = require("https-proxy-agent");
let Query = class Query {
    setApiKey(baseUrl, apiKey, proxy) {
        return __awaiter(this, void 0, void 0, function* () {
            this.apiKey = apiKey || process.env.SMS_ACTIVATE_API_KEY;
            this.baseUrl = baseUrl;
            this.proxy = proxy;
        });
    }
    makeCall(action, query) {
        query = query || {};
        if (process.env.SMS_ACTIVATE_DEBUG)
            console.log('Call >', comon_1.EApiActions[action], query);
        return new Promise((resolve, reject) => {
            if (!this.apiKey)
                return reject(new Error(errors_1.RequestErrors.MissingApiKey));
            const axiosConfig = {
                params: Object.assign({ api_key: this.apiKey, action: comon_1.EApiActions[action] }, query),
            };
            if (this.proxy) {
                console.log('proxy passed');
                const proxyUrl = `${this.proxy.protocol}://${this.proxy.ip}:${this.proxy.port}`;
                const agent = new https_proxy_agent_1.HttpsProxyAgent(proxyUrl);
                axiosConfig.httpsAgent = agent;
            }
            axios_1.default
                .get(this.baseUrl, axiosConfig)
                .then((result) => {
                console.log('result: ' + JSON.parse(JSON.stringify(result)));
                if (process.env.SMS_ACTIVATE_DEBUG)
                    console.debug('Success |', result.data);
                if (typeof result.data == 'string' && errors_1.EApiErrors[result.data])
                    return reject(new Error(errors_1.EApiErrors[result.data]));
                resolve(result.data);
            })
                .catch((error) => {
                console.log('err: ' + JSON.parse(JSON.stringify(error)));
                console.log('action ' + comon_1.EApiActions[action]);
                if (process.env.SMS_ACTIVATE_DEBUG)
                    console.error('Catch |', error);
                reject(error);
            });
        });
    }
};
exports.Query = Query;
exports.Query = Query = __decorate([
    (0, tsyringe_1.singleton)()
], Query);
//# sourceMappingURL=query.module.js.map