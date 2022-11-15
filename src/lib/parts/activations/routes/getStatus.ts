import { EApiActions } from '../../../../ressources/comon';
import { IGetStatusOptions } from '../../../../ressources/options';
import {
  EActivationGetStatusAnswer,
  IStatusResponse,
} from '../../../../ressources/status';
import { Query } from '../../../query/query.module';

export class getStatus {
  public query?: Query;

  async getStatus(options: IGetStatusOptions | string | number) {
    return new Promise<IStatusResponse>((resolve, reject) => {
      if (typeof options == 'string' || typeof options == 'number')
        options = { id: options };
      this.query
        ?.makeCall(EApiActions.getStatus, options)
        .then((res) => {
          if (typeof res == 'string') {
            if (res.includes(':')) {
              const index = res.indexOf(':');
              const code = res.slice(0, index);
              const data = res.slice(index + 1);
              return resolve({
                message: EActivationGetStatusAnswer[code],
                code,
                data,
              });
            }
            if (EActivationGetStatusAnswer[res])
              return resolve({
                message: EActivationGetStatusAnswer[res],
                code: res,
              });
          }
          reject(res);
        })
        .catch((err) => reject(err));
    });
  }
}
