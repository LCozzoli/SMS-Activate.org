import { autoInjectable } from 'tsyringe';
import { use } from 'typescript-mix';
import { Activations } from './parts/activations/activations';
import { Rental } from './parts/rental/rental';
import { Utils } from './parts/utils/utils';
import { Countries } from './parts/utils/countries';
import { Query } from './query/query.module';
import { Services } from './parts/utils/services';

interface Base extends Activations, Rental {}

interface ProxyInfo {
  username: string;
  password: string;
  ip: string;
  protocol: string;
}

@autoInjectable()
class Base {
  @use(Activations, Rental) this;
  constructor(
    public baseUrl: string,
    public apiKey?: string,
    public proxy?: ProxyInfo,
    public query?: Query,
    public countries?: Countries,
    public services?: Services,
    public utils?: Utils
  ) {
    query?.setApiKey(baseUrl,apiKey);
  }
}

export class SMSActivate extends Base {
  public utils: Utils;

  constructor(baseUrl: string, apiKey?: string, proxy?: ProxyInfo) {
    super(baseUrl,apiKey, proxy);
  }
}
