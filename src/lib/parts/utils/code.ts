import { use } from 'typescript-mix';
import { sleep } from '../../../ressources/helpers';
import { EActivationGetStatusAnswer } from '../../../ressources/status';
import { Query } from '../../query/query.module';
import { getStatus } from '../activations/routes/getStatus';

export interface waitForCode extends getStatus {}

export class waitForCode {
  public query: Query;

  @use(getStatus)
  async waitForCode(id: string | number, tries = 60): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      while (tries--) {
        const result = await this.getStatus(id);
        if (result.code == EActivationGetStatusAnswer.STATUS_OK)
          return resolve(result.data);
        if (result.code != EActivationGetStatusAnswer.STATUS_WAIT_CODE)
          return reject(result);
        sleep(1000);
      }
    });
  }
}
