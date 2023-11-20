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
const node_fetch_1 = __importDefault(require("node-fetch"));
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
            const url = `${this.baseUrl}?api_key=${this.apiKey}&action=${comon_1.EApiActions[action]}`;
            const params = new URLSearchParams();
            for (const key in query) {
                if (query.hasOwnProperty(key)) {
                    params.append(key, String(query[key]));
                }
            }
            const fullUrl = `${url}&${params.toString()}`;
            const requestOptions = {};
            if (this.proxy) {
                console.log('proxy passed');
                const proxyUrl = `${this.proxy.protocol}://${this.proxy.ip}:${this.proxy.port}`;
                const agent = new https_proxy_agent_1.HttpsProxyAgent(proxyUrl);
                requestOptions.agent = agent;
            }
            (0, node_fetch_1.default)(fullUrl, requestOptions)
                .then((response) => __awaiter(this, void 0, void 0, function* () {
                if (!response.ok) {
                    const errorText = yield response.text();
                    throw new Error(`HTTP error! Status: ${response.status}, Text: ${errorText}`);
                }
                return response.json();
            }))
                .then((result) => {
                console.log('result: ' + result);
                if (process.env.SMS_ACTIVATE_DEBUG)
                    console.debug('Success |', result);
                if (typeof result === 'string' && errors_1.EApiErrors[result])
                    return reject(new Error(errors_1.EApiErrors[result]));
                resolve(result);
            })
                .catch((error) => {
                console.log('err ' + error.toString());
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