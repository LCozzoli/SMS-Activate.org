import { EApiActions } from '../../../../ressources/comon';
import { EApiErrors } from '../../../../ressources/errors';
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
        ?.makeCall(EApiActions.setStatus, options)
        .then((res) => {
          if (typeof res == 'string') {
            if (res.includes(':')) {
              const data = res.split(':');
              return resolve({
                message: EActivationGetStatusAnswer[data[0]],
                code: data[0],
                data: data[1],
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
