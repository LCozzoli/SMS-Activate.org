import { BASE_URL, EApiActions } from '../../ressources/comon';
import { singleton } from 'tsyringe';
import { EApiErrors, RequestErrors } from '../../ressources/errors';
import {IProxyOptions} from "../../ressources/options";
import axios, { AxiosRequestConfig } from 'axios';
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
      query?: {}
  ): Promise<any> {
    query = query || {};

    if (process.env.SMS_ACTIVATE_DEBUG)
      console.log('Call >', EApiActions[action], query);

    return new Promise<any>((resolve, reject) => {
      if (!this.apiKey) return reject(new Error(RequestErrors.MissingApiKey));

      const axiosConfig: AxiosRequestConfig = {
        params: {
          api_key: this.apiKey,
          action: EApiActions[action],
          ...query,
        },
      };

      if (this.proxy) {
        const proxyUrl = `${this.proxy.protocol}://${this.proxy.ip}:${this.proxy.port}`;
        const agent = new HttpsProxyAgent(proxyUrl);
        axiosConfig.httpsAgent = agent;
      }

      let urlErr;
      axios
          .get(this.baseUrl, axiosConfig)
          .then((result) => {
            if (process.env.SMS_ACTIVATE_DEBUG)
              console.debug('Success |', result.data);
            if (typeof result.data == 'string' && EApiErrors[result.data])
              if(EApiActions[action] == 'setStatus'){
                urlErr = 'URL: ' + this.baseUrl + '?' + 'api_key='+axiosConfig.params.api_key + '&action=' + EApiActions[action] + '&status=' + axiosConfig.params.status + '&id=' + axiosConfig.params.id
              }
              return reject(new Error(EApiErrors[result.data] + urlErr));
            resolve(result.data);
          })
          .catch((error) => {
            if(EApiActions[action] == 'setStatus'){
              error += 'URL: ' + this.baseUrl + '?' + 'api_key='+axiosConfig.params.api_key + '&action=' + EApiActions[action] + '&status=' + axiosConfig.params.status + '&id=' + axiosConfig.params.id
            }
            if (process.env.SMS_ACTIVATE_DEBUG) console.error('Catch |', error);
            reject(error);
          });
    });
  }
}
