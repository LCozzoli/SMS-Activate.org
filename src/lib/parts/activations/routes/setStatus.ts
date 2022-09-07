import { EApiActions } from '../../../../ressources/comon';
import { EApiErrors } from '../../../../ressources/errors';
import { ISetStatusOptions } from '../../../../ressources/options';
import {
  EActivationSetStatusAnswer,
  IStatusResponse,
} from '../../../../ressources/status';
import { Query } from '../../../query/query.module';

export class setStatus {
  public query?: Query;

  async setStatus(options: ISetStatusOptions) {
    return new Promise<IStatusResponse>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getStatus, options)
        .then((res) => {
          if (EActivationSetStatusAnswer[res])
            return resolve({
              message: EActivationSetStatusAnswer[res],
              code: res,
            });
          if (EApiErrors[res]) return reject(new Error(EApiErrors[res]));
          reject(res);
        })
        .catch((err) => reject(err));
    });
  }
}
