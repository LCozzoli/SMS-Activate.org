import { singleton } from 'tsyringe';
import { use } from 'typescript-mix';
import { waitForCode } from './code';
import { Countries } from './countries';

export interface Utils extends waitForCode {}

@singleton()
export class Utils {
  @use(waitForCode) this;
  constructor(public countries: Countries) {}
}
