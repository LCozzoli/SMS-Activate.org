import { EApiActions } from '../../../../ressources/comon';
import { EApiErrors } from '../../../../ressources/errors';
import { ISetRentStatusOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';

export class setRentStatus {
  public query?: Query;

  async setRentStatus(options: ISetRentStatusOptions): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.setRentStatus, options)
        .then((response) => {
          if (typeof response == 'object') {
            if (response.status == 'success') return resolve();
            if (response.message && EApiErrors[response.message])
              return reject(new Error(EApiErrors[response.message]));
          } else if (typeof response == 'string') {
            if (EApiErrors[response])
              return reject(new Error(EApiErrors[response]));
          }
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
