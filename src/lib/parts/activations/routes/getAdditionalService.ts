import { EApiActions } from '../../../../ressources/comon';
import { IGetAdditionalServiceOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';
import { Services } from '../../utils/services';

export class getAdditionalService {
  public query?: Query;
  public services?: Services;

  async getAdditionalService(options: IGetAdditionalServiceOptions) {
    if (options.service) options.service = this.services?.get(options.service);
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
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
