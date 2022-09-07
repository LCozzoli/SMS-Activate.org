import { EApiActions } from '../../../../ressources/comon';
import { IGetRentNumberOptions } from '../../../../ressources/options';
import { IRentedNumber } from '../../../../ressources/responses';
import { Countries } from '../../utils/countries';
import { Query } from '../../../query/query.module';

export class getRentNumber {
  public query?: Query;
  public countries?: Countries;

  async getRentNumber(options: IGetRentNumberOptions): Promise<IRentedNumber> {
    if (options.country && typeof options.country == 'string')
      options.country = await this.countries?.toNumber(options.country);
    return new Promise<IRentedNumber>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getRentNumber)
        .then((response) => {
          if (typeof response == 'object' && response.status == 'success')
            return resolve({
              id: response.phone.id,
              endDate: new Date(response.phone.endDate),
              number: response.phone.number,
            });
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
