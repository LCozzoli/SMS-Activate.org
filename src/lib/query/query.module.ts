import { BASE_URL, EApiActions } from '../../ressources/comon';
import { singleton } from 'tsyringe';
import axios from 'axios';
import { RequestErrors } from '../../ressources/errors';

@singleton()
export class Query {
  private apiKey: string | null;

  async setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  makeCall(
    action: EApiActions,
    query?: Record<string, string | number | boolean>
  ): any {
    query = query || {};
    return new Promise<any>((resolve, reject) => {
      if (!this.apiKey) return reject(new Error(RequestErrors.MissingApiKey));
      const params = new URLSearchParams({
        api_key: this.apiKey,
        action: EApiActions[action],
        ...query,
      });
      axios
        .get(BASE_URL, {
          params,
        })
        .then((result) => resolve(result.data))
        .catch((error) => reject(error));
    });
  }
}
