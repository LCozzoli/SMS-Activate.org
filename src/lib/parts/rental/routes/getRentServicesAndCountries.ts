import { EApiActions } from '../../../../ressources/comon';
import { IRentServicesAndCountriesOptions } from '../../../../ressources/options';
import { IRentServicesAndCountries } from '../../../../ressources/responses';
import { Countries } from '../../utils/countries';
import { Query } from '../../../query/query.module';

export class getRentServicesAndCountries {
  public query?: Query;
  public countries?: Countries;

  async getRentServicesAndCountries(
    options: IRentServicesAndCountriesOptions
  ): Promise<IRentServicesAndCountries> {
    if (options.country && typeof options.country == 'string')
      options.country = await this.countries?.toNumber(options.country);
    return new Promise<IRentServicesAndCountries>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getRentServicesAndCountries)
        .then((response) => {
          if (typeof response == 'object') return resolve(response);
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
