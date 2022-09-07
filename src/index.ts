import 'reflect-metadata';
import { autoInjectable } from 'tsyringe';
import { use } from 'typescript-mix';
import { Activations } from './lib/parts/activations/activations';
import { Rental } from './lib/parts/rental/rental';
import { Utils } from './lib/parts/utils/utils';
import { Countries } from './lib/parts/utils/countries';
import { Query } from './lib/query/query.module';

interface Base extends Activations, Rental {}

@autoInjectable()
class Base {
  @use(Activations, Rental) this;
  constructor(
    public apiKey: string,
    public query?: Query,
    public countries?: Countries,
    public utils?: Utils
  ) {
    query?.setApiKey(apiKey);
  }
}

export class SMSActivate extends Base {
  public utils: Utils;

  constructor(apiKey: string) {
    super(apiKey);
  }
}
