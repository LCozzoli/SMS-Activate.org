import { singleton } from 'tsyringe';
import { use } from 'typescript-mix';
import { waitForCode } from './code';
import { Countries } from './countries';
import { Services } from './services';
import { Query } from '../../query/query.module';

export interface Utils extends waitForCode {}

@singleton()
export class Utils {
  @use(waitForCode) this;
  constructor(
    public countries: Countries,
    public services: Services,
    public readonly query: Query
  ) {}
}
