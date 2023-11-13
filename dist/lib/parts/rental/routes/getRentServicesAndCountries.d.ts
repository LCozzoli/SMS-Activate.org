import { IRentServicesAndCountriesOptions } from '../../../../ressources/options';
import { IRentServicesAndCountries } from '../../../../ressources/responses';
import { Countries } from '../../utils/countries';
import { Query } from '../../../query/query.module';
export declare class getRentServicesAndCountries {
    query?: Query;
    countries?: Countries;
    getRentServicesAndCountries(options: IRentServicesAndCountriesOptions): Promise<IRentServicesAndCountries>;
}
//# sourceMappingURL=getRentServicesAndCountries.d.ts.map