import { BASE_URL, EApiActions } from '../../ressources/comon';
import { singleton } from 'tsyringe';
import axios from 'axios';
import { EApiErrors, RequestErrors } from '../../ressources/errors';

@singleton()
export class Query {
  private baseUrl: string;
  private apiKey: string | null;

  async setApiKey(baseUrl: string, apiKey?: string) {
    this.apiKey = apiKey || process.env.SMS_ACTIVATE_API_KEY;
    this.baseUrl = baseUrl;
  }

  makeCall(
    action: EApiActions,
    query?: Record<string, string | number | boolean>
  ): any {
    query = query || {};

    if (process.env.SMS_ACTIVATE_DEBUG)
      console.log('Call >', EApiActions[action], query);
    return new Promise<any>((resolve, reject) => {
      if (!this.apiKey) return reject(new Error(RequestErrors.MissingApiKey));
      const params = new URLSearchParams({
        api_key: this.apiKey,
        action: EApiActions[action],
        ...query,
      });
      axios
        .get(this.baseUrl, {
          params,
        })
        .then((result) => {
          if (process.env.SMS_ACTIVATE_DEBUG)
            console.debug('Success |', result.data);
          if (typeof result.data == 'string' && EApiErrors[result.data])
            return reject(new Error(EApiErrors[result.data]));
          resolve(result.data);
        })
        .catch((error) => {
          if (process.env.SMS_ACTIVATE_DEBUG) console.error('Catch |', error);
          reject(error);
        });
    });
  }
}
