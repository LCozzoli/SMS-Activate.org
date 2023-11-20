import { IGetNumberOptions } from '../../../../ressources/options';
import { Query } from '../../../query/query.module';
import { SMSNumber } from '../../utils/number';
import { Services } from '../../utils/services';
export declare class getNumberV2 {
    query?: Query;
    services?: Services;
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
    getNumberV2(options: IGetNumberOptions): Promise<SMSNumber>;
    getNumber(options: IGetNumberOptions): Promise<SMSNumber>;
}
//# sourceMappingURL=getNumberV2.d.ts.map