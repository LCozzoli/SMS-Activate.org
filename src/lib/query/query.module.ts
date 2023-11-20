import { BASE_URL, EApiActions } from '../../ressources/comon';
import { singleton } from 'tsyringe';
import { EApiErrors, RequestErrors } from '../../ressources/errors';
import { IProxyOptions } from "../../ressources/options";
import fetch, { RequestInit } from 'node-fetch';
import { HttpsProxyAgent } from 'https-proxy-agent';

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

      const url = `${this.baseUrl}?api_key=${this.apiKey}&action=${EApiActions[action]}`;
      const params = new URLSearchParams();

      for (const key in query) {
        if (query.hasOwnProperty(key)) {
          params.append(key, String(query[key]));
        }
      }

      const fullUrl = `${url}&${params.toString()}`;

      const requestOptions: RequestInit = {};

      if (this.proxy) {
        console.log('proxy passed');
        const proxyUrl = `${this.proxy.protocol}://${this.proxy.ip}:${this.proxy.port}`;
        const agent = new HttpsProxyAgent(proxyUrl);
        requestOptions.agent = agent;
      }

      fetch(fullUrl, requestOptions)
          .then(async (response) => {
            if (!response.ok) {
              const errorText = await response.text();
              throw new Error(`HTTP error! Status: ${response.status}, Text: ${errorText}`);
            }
            return response.json();
          })
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
