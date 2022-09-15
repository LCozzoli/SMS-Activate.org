import { readFileSync, existsSync } from 'fs';
import { singleton } from 'tsyringe';

export interface IService {
  code: string;
  name: string;
  f: string;
}

@singleton()
export class Services {
  private services: IService[] = [];

  constructor() {
    const SERVICE_FILE = `${__dirname}/services.json`;

    if (!existsSync(SERVICE_FILE)) throw new Error('Services file not found.');

    try {
      const data = readFileSync(SERVICE_FILE, 'utf8');
      this.services = JSON.parse(data);
    } catch (err) {
      throw err;
    }
  }

  public get(name: string) {
    const lowered = name.toLowerCase();
    if (lowered.length == 2) return lowered;
    const services = this.services.filter((service) =>
      service.name.toLowerCase().includes(lowered)
    );
    if (services.length == 1) return services[0].code;
    throw new Error(
      `Multiple services found: ${services
        .map((s) => `[${s.name}] (${s.code})`)
        .join(', ')}`
    );
  }
}
