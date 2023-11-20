import { BASE_URL, EApiActions } from '../../ressources/comon';
import { singleton } from 'tsyringe';
import { EApiErrors, RequestErrors } from '../../ressources/errors';
import {IProxyOptions} from "../../ressources/options";
import * as http from 'http';

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

      const queryParams = new URLSearchParams({
        api_key: this.apiKey,
        action: EApiActions[action],
        ...query,
      });

      const requestOptions: http.RequestOptions = {
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

          if (typeof data === 'string' && EApiErrors[data])
            return reject(new Error(EApiErrors[data]));

          resolve(JSON.parse(data));
        });
      });

      request.on('error', (error) => {
        console.log('err ' + error.toString());
        if (process.env.SMS_ACTIVATE_DEBUG) console.error('Catch |', error);
        reject(error);
      });

      request.end();
    });
  }
}
