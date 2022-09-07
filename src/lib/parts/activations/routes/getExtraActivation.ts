import { EApiActions } from '../../../../ressources/comon';
import { EApiErrors } from '../../../../ressources/errors';
import { IGetExtraActivationOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';

export class getExtraActivation {
  public query?: Query;

  async getExtraActivation(options: IGetExtraActivationOptions | string) {
    let opts;
    if (typeof options == 'string') opts = { activationId: options };
    else opts = options;
    return new Promise((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getExtraActivation, opts)
        .then((response) => {
          if (response.includes('ACCESS_NUMBER')) {
            const elements = response.split(':');
            return resolve({
              id: elements[1],
              phone: elements[2],
            });
          }
          if (EApiErrors[response])
            return reject(new Error(EApiErrors[response]));
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
