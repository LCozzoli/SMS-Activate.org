import { EApiActions } from '../../../../ressources/comon';
import { EApiErrors } from '../../../../ressources/errors';
import { IRentList } from '../../../../ressources/responses';
import { Query } from '../../../query/query.module';

export class getRentList {
  public query?: Query;

  async getRentList(): Promise<IRentList> {
    return new Promise<IRentList>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getRentList)
        .then((response) => {
          if (typeof response == 'object') {
            if (response.status == 'success' && response.values)
              return resolve(response.values);
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
