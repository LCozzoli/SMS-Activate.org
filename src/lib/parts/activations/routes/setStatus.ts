import { EApiActions } from '../../../../ressources/comon';
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
        ?.makeCall(EApiActions.setStatus, options)
        .then((res) => {
          if (EActivationSetStatusAnswer[res])
            return resolve({
              message: EActivationSetStatusAnswer[res],
              code: res,
            });
          reject(res);
        })
        .catch((err) => reject(err));
    });
  }
}
