import { EApiActions } from '../../../../ressources/comon';
import { EApiErrors } from '../../../../ressources/errors';
import { ICreateTaskForCallOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';

export class createTaskForCall {
  public query?: Query;

  async createTaskForCall(options: ICreateTaskForCallOptions): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.createTaskForCall, options)
        .then((response) => {
          if (typeof response == 'object' && response.status == 'success')
            return resolve();
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
