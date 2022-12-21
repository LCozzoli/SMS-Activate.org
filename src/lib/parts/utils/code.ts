import { use } from 'typescript-mix';
import { sleep } from '../../../ressources/helpers';
import { EActivationGetStatusAnswer } from '../../../ressources/status';
import { Query } from '../../query/query.module';
import { getStatus } from '../activations/routes/getStatus';

export interface waitForCode extends getStatus {}

export class waitForCode {
  public query: Query;

  @use(getStatus)
  async waitForCode(id: string | number, tries = 180): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      while (tries--) {
        const result = await this.getStatus(id);
        if (
          result.message == EActivationGetStatusAnswer.STATUS_OK ||
          result.message == EActivationGetStatusAnswer.STATUS_UNEXPECTED
        )
          return resolve(result.data);
        if (result.message != EActivationGetStatusAnswer.STATUS_WAIT_CODE)
          return reject(result.code);
        await sleep(1000);
      }
      reject('EXPIRED');
    });
  }
}
