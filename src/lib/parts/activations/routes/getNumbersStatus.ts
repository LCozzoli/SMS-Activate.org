import { EApiActions } from '../../../../ressources/comon';
import { Query } from '../../../query/query.module';

export class getNumbersStatus {
  public query?: Query;

  async getNumbersStatus(country?: number, operators?: string[]) {
    return this.query?.makeCall(EApiActions.getNumbersStatus, {
      country: country || '',
      operator: operators.length ? operators.join(',') : '',
    });
  }
}
