import { BASE_URL, EApiActions } from '../../ressources/comon';
import { singleton } from 'tsyringe';
import { EApiErrors, RequestErrors } from '../../ressources/errors';
import {IProxyOptions} from "../../ressources/options";
import fetch, { RequestInit } from 'node-fetch';
import {HttpsProxyAgent} from 'https-proxy-agent';

@singleton()
export class Query {
  private baseUrl: string;
  private apiKey: string | null;
  private proxy: IProxyOptions;

  async setApiKey(baseUrl: string, apiKey?: string, proxy?: IProxyOptions) {
    this.apiKey = apiKey || process.env.SMS_ACTIVATE_API_KEY;
    this.baseUrl = baseUrl;
    this.proxy = proxy;
  }

  makeCall(
      action: EApiActions,
      query?: Record<string, string | number | boolean>
  ): Promise<any> {
    query = query || {};

    if (process.env.SMS_ACTIVATE_DEBUG)
      console.log('Call >', EApiActions[action], query);

    return new Promise<any>((resolve, reject) => {
      if (!this.apiKey) return reject(new Error(RequestErrors.MissingApiKey));

      const requestOptions: RequestInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const url = new URL(this.baseUrl);
      url.searchParams.append('api_key', this.apiKey);
      url.searchParams.append('action', EApiActions[action]);

      Object.keys(query).forEach((key) => {
        url.searchParams.append(key, query[key].toString());
      });

      if (this.proxy) {
        console.log('proxy passed');
        const proxyUrl = `${this.proxy.protocol}://${this.proxy.ip}:${this.proxy.port}`;
        const agent = new HttpsProxyAgent(proxyUrl);
        requestOptions.agent = agent;
      }

      fetch(url.toString(), requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log('result: ' + result);
            if (process.env.SMS_ACTIVATE_DEBUG)
              console.debug('Success |', result);
            if (typeof result === 'string' && EApiErrors[result])
              return reject(new Error(EApiErrors[result]));
            resolve(result);
          })
          .catch((error) => {
            console.log('err ' + error.toString());
            if (process.env.SMS_ACTIVATE_DEBUG) console.error('Catch |', error);
            reject(error);
          });
    });
  }
}
