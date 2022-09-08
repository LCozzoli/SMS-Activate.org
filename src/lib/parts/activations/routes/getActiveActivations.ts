import { EApiErrors } from '../../../../ressources/errors';
import { EApiActions } from '../../../../ressources/comon';
import { IActiveActivation } from '../../../../ressources/responses';
import { Query } from '../../../query/query.module';

export class getActiveActivations {
  public query?: Query;

  async getActiveActivations(): Promise<IActiveActivation[]> {
    return new Promise<IActiveActivation[]>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getActiveActivations)
        .then((response) => {
          if (response.status) {
            const activations = response.activeActivations || [];
            return resolve(
              activations.map((activation: any) => {
                return {
                  activationId: activation.activationId,
                  serviceCode: activation.serviceCode,
                  phoneNumber: activation.phoneNumber,
                  activationCost: activation.activationCost
                    ? parseFloat(activation.activationCost)
                    : 0,
                  activationStatus: activation.activationStatus
                    ? parseInt(activation.activationStatus, 10)
                    : 0,
                  discount: activation.discount
                    ? parseFloat(activation.discount)
                    : 0,
                  repeated: activation.repeated && activation.repeated === '1',
                  smsCode: activation.smsCode,
                  smsText: activation.smsText,
                  activationTime: activation.activationTime
                    ? new Date(activation.activationTime)
                    : undefined,
                  countryCode: activation.countryCode,
                  countryName: activation.countryName,
                  canGetAnotherSms:
                    activation.canGetAnotherSms &&
                    activation.canGetAnotherSms === '1',
                };
              })
            );
          }
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
