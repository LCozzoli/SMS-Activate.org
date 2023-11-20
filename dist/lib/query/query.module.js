"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.Query = void 0;
const comon_1 = require("../../ressources/comon");
const tsyringe_1 = require("tsyringe");
const errors_1 = require("../../ressources/errors");
const http = __importStar(require("http"));
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
            const queryParams = new URLSearchParams(Object.assign({ api_key: this.apiKey, action: comon_1.EApiActions[action] }, query));
            const requestOptions = {
                method: 'GET',
                host: this.proxy ? this.proxy.ip : this.baseUrl,
                port: this.proxy ? this.proxy.port : 80,
                path: this.proxy ? this.baseUrl + '?' + queryParams : `/?${queryParams}`,
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            if (this.proxy && this.proxy.username && this.proxy.password) {
                requestOptions.headers['Proxy-Authorization'] = 'Basic ' +
                    Buffer.from(`${this.proxy.username}:${this.proxy.password}`).toString('base64');
            }
            const request = http.request(requestOptions, (response) => {
                let data = '';
                response.on('data', (chunk) => {
                    data += chunk;
                });
                response.on('end', () => {
                    console.log('result: ' + data);
                    if (process.env.SMS_ACTIVATE_DEBUG)
                        console.debug('Success |', data);
                    if (typeof data === 'string' && errors_1.EApiErrors[data])
                        return reject(new Error(errors_1.EApiErrors[data]));
                    resolve(JSON.parse(data));
                });
            });
            request.on('error', (error) => {
                console.log('err ' + error.toString());
                if (process.env.SMS_ACTIVATE_DEBUG)
                    console.error('Catch |', error);
                reject(error);
            });
            request.end();
        });
    }
};
exports.Query = Query;
exports.Query = Query = __decorate([
    (0, tsyringe_1.singleton)()
], Query);
//# sourceMappingURL=query.module.js.map