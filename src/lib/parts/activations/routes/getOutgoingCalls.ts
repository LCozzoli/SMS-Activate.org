import { EApiActions } from '../../../../ressources/comon';
import { IGetOutgoingCallsOptions } from '../../../../ressources/options';
import { IOutGoingCalls } from '../../../../ressources/responses';
import { Query } from '../../../query/query.module';

export class getOutgoingCalls {
  public query?: Query;

  async getOutgoingCalls(
    options: IGetOutgoingCallsOptions
  ): Promise<IOutGoingCalls> {
    return new Promise<IOutGoingCalls>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getOutgoingCalls, options)
        .then((response) => {
          if (typeof response == 'object') return resolve(response);
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
