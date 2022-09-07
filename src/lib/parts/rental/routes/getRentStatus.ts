import { EApiActions } from '../../../../ressources/comon';
import { IGetRentStatusOptions } from '../../../../ressources/options';
import { IRentStatus } from '../../../../ressources/responses';
import { Query } from '../../../query/query.module';

export class getRentStatus {
  public query?: Query;

  async getRentStatus(
    options: IGetRentStatusOptions | string | number
  ): Promise<IRentStatus[]> {
    let opts;
    if (typeof options == 'string' || typeof options == 'number')
      opts = { id: options };
    else opts = options;
    return new Promise<IRentStatus[]>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getRentStatus, opts)
        .then((response) => {
          if (typeof response == 'object' && response.status == 'success') {
            let res = [];
            for (const number of response.values) {
              res.push({
                phoneFrom: number.phoneFrom,
                text: number.text,
                service: number.service,
                date: new Date(number.date),
              });
            }
            return resolve(res);
          }
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
