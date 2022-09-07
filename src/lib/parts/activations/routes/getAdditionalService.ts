import { EApiActions } from '../../../../ressources/comon';
import { EApiErrors } from '../../../../ressources/errors';
import { IGetAdditionalServiceOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';

export class getAdditionalService {
  public query?: Query;

  async getAdditionalService(options: IGetAdditionalServiceOptions) {
    return new Promise((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getAdditionalService, options)
        .then((response) => {
          if (response.includes('ADDITIONAL')) {
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
