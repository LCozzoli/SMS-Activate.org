import { EApiErrors } from '../../../../ressources/errors';
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
          if (response.status) {
            const activations = response.activeActivations || [];
            return resolve(
              activations.map((activation: any) => {
                return {
                  activationId: activation.activationId,
                  serviceCode: activation.serviceCode,
                  phoneNumber: activation.phoneNumber,
                  activationCost: parseFloat(activation.activationCost),
                  activationStatus: parseInt(activation.activationStatus, 10),
                  discount: parseFloat(activation.discount),
                  repeated: activation.repeated === '1',
                  smsCode: activation.smsCode,
                  smsText: activation.smsText,
                  activationTime: new Date(activation.activationTime),
                  countryCode: activation.countryCode,
                  countryName: activation.countryName,
                  canGetAnotherSms: activation.canGetAnotherSms === '1',
                };
              })
            );
          }
          if (EApiErrors[response])
            return reject(new Error(EApiErrors[response]));
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
