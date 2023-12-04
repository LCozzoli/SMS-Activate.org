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
      try {
        while (tries--) {
          const result = await this.getStatus(id);
          console.log(result)
          if (
              result.message == EActivationGetStatusAnswer.STATUS_OK ||
              result.message == EActivationGetStatusAnswer.STATUS_UNEXPECTED
          )
            return resolve(result.data);
          if (result.message != EActivationGetStatusAnswer.STATUS_WAIT_CODE || result.code != '522')
            return reject(result.code);
          await sleep(await getRandomNumber());
        }
        reject('EXPIRED');
      } catch (error) {
        reject(error);
      }
    });
  }
}
async function getRandomNumber() {
  // Define the lower and upper bounds
  const lowerBound = 1500;
  const upperBound = 5500;

  // Calculate the midpoint
  const midpoint = (lowerBound + upperBound) / 2;

  // Calculate the range
  const range = upperBound - lowerBound;

  // Generate a random number with a triangular distribution
  const u = Math.random();
  const randomNumber = u < 0.5
      ? lowerBound + Math.sqrt(u * range * (midpoint - lowerBound))
      : upperBound - Math.sqrt((1 - u) * range * (upperBound - midpoint));

  return Math.round(randomNumber); // Optional: Round to the nearest integer
}