import { autoInjectable } from 'tsyringe';
import { use } from 'typescript-mix';
import { INumber } from '../../../ressources/responses';
import { EActivationSetStatus } from '../../../ressources/status';
import { Query } from '../../query/query.module';
import { setStatus } from '../activations/routes/setStatus';
import { Utils } from './utils';

export interface SMSNumber extends setStatus {}

@autoInjectable()
export class SMSNumber {
  public id: string;
  public phone: string;
  public number: string;
  public activationId: string;
  public phoneNumber: string;
  public countryCode: string;
  public activationCost: number;
  public canGetAnotherSms: boolean;
  public activationTime: Date;
  public activationOperator: string;

  @use(setStatus) this;

  constructor(
    dataset: INumber,
    public readonly query?: Query,
    private readonly utils?: Utils
  ) {
    for (const key in dataset) this[key] = dataset[key];

    // aliases
    this.id = dataset.activationId;
    this.phone = dataset.phoneNumber;
    this.number = dataset.phoneNumber;
  }

  data(): INumber {
    return {
      activationId: this.activationId,
      phoneNumber: this.phoneNumber,
      countryCode: this.countryCode,
      activationCost: this.activationCost,
      canGetAnotherSms: this.canGetAnotherSms,
      activationTime: this.activationTime,
      activationOperator: this.activationOperator,
    };
  }

  async getCode(): Promise<string> {
    return this.utils?.waitForCode(this.activationId);
  }

  async ready() {
    return this.setStatus({
      id: this.activationId,
      status: EActivationSetStatus.Ready,
    });
  }

  async failed() {
    return this.setStatus({
      id: this.activationId,
      status: EActivationSetStatus.Failed,
    });
  }

  async success() {
    return this.setStatus({
      id: this.activationId,
      status: EActivationSetStatus.Success,
    });
  }

  async requestAnother() {
    return this.setStatus({
      id: this.activationId,
      status: EActivationSetStatus.RequestAnotherCode,
    });
  }
}
