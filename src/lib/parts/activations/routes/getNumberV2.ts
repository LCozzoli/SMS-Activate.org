import { EApiActions } from '../../../../ressources/comon';
import { IGetNumberOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';
import { INumber } from '../../../../ressources/responses';
import { Countries } from '../../utils/countries';

export class getNumberV2 {
  public query?: Query;
  public countries?: Countries;

  /**
   * Order a phone number for verification
   * @param options Options as IGetNumberOptions
   * @param options.service Service as string
   * @param options.country Country as string or number, if string it'll be converted to number
   * @param options.forward * Forward code as string
   * @param options.freePrice * Free price as number
   * @param options.maxPrice * Maximum price as number
   * @param options.phoneException * Phone prefix exception as string separated by commas
   * @param options.operator * Operator separated by commas as string
   * @param options.verification * If true, get a number able to receive calls
   * @param options.ref * Referral ID as string
   * @returns Phone number as string
   * */

  async getNumberV2(options: IGetNumberOptions): Promise<INumber> {
    if (options.phoneException) options.phoneException = '1';
    if (typeof options.country == 'string')
      options.country = await this.countries?.toNumber(options.country);
    return new Promise<INumber>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getNumberV2, options)
        .then((response) => {
          if (typeof response == 'object') {
            return resolve({
              activationId: response.activationId,
              phoneNumber: response.phoneNumber,
              activationCost: parseFloat(response.activationCost),
              activationTime: new Date(response.activationTime),
              activationOperator: response.activationOperator,
              countryCode: response.countryCode,
              canGetAnotherSms: response.canGetAnotherSms === '1',
            });
          }
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }

  async getNumber(options: IGetNumberOptions): Promise<INumber> {
    return this.getNumberV2(options);
  }
}
