import { BASE_URL, EApiActions } from '../../ressources/comon';
import { singleton } from 'tsyringe';
import { EApiErrors, RequestErrors } from '../../ressources/errors';
import { IProxyOptions } from '../../ressources/options';
import fetch from 'node-fetch';
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

    return new Promise<any>(async (resolve, reject) => {
      if (!this.apiKey) return reject(new Error(RequestErrors.MissingApiKey));

      const queryParams = new URLSearchParams({
        api_key: this.apiKey,
        action: EApiActions[action],
        ...query,
      });

      const url = `${this.baseUrl}?${queryParams.toString()}`;

      const requestOptions: any = {
        method: 'GET',
      };

      if (this.proxy) {
        console.log('proxy passed');
        const proxyUrl = `${this.proxy.protocol}://${this.proxy.ip}:${this.proxy.port}`;
        requestOptions.agent = new HttpsProxyAgent(proxyUrl);
      }

      try {
        const response = await fetch(url, requestOptions);
        const body = await response.text();

        console.log('result: ' + body);

        if (process.env.SMS_ACTIVATE_DEBUG)
          console.debug('Success |', body);

        if (typeof body === 'string' && EApiErrors[body])
          return reject(new Error(EApiErrors[body]));

        resolve(body);
      } catch (error) {
        console.log('err ' + error.toString());

        if (process.env.SMS_ACTIVATE_DEBUG) console.error('Catch |', error);

        reject(error);
      }
    });
  }
}
