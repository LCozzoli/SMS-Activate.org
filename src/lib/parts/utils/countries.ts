import { writeFileSync, readFileSync, existsSync } from 'fs';
import { tmpdir } from 'os';
import { singleton } from 'tsyringe';
import { EApiActions } from '../../../ressources/comon';
import { sleep } from '../../../ressources/helpers';
import { Query } from '../../query/query.module';

export interface ICountry {
  id: number;
  rus: string;
  eng: string;
  chn: string;
  visible: boolean;
  retry: boolean;
  rent: boolean;
  multiService: boolean;
}

export interface ICountryList {
  updatedAt: number;
  countries: ICountry[];
}

@singleton()
export class Countries {
  private list: ICountryList;

  constructor(private query: Query) {
    const COUNTRY_FILE = `${tmpdir()}/smsApi.countries.json`;

    if (existsSync(COUNTRY_FILE)) {
      const data = readFileSync(COUNTRY_FILE, 'utf8');
      try {
        this.list = JSON.parse(data);
      } catch (err) {
        console.log(err);
      }
    }
    if (
      !this.list ||
      !this.list.updatedAt ||
      this.list.updatedAt < Date.now() - 1000 * 60 * 60 * 24
    )
      this.update(COUNTRY_FILE);
  }

  private async update(file: string) {
    await sleep(100);
    this.query.makeCall(EApiActions.getCountries, null).then((res: any) => {
      try {
        const countries = Object.values(res) as ICountry[];
        if (countries && countries.length) {
          this.list = {
            updatedAt: Date.now(),
            countries,
          };
          writeFileSync(file, JSON.stringify(this.list));
        }
      } catch (err) {
        throw err;
      }
    });
  }

  private async awaitList() {
    let count = 0;
    while (!this.list) {
      if (++count > 100)
        throw new Error(
          'Countries list cannot load. Check your internet connection.'
        );
      await sleep(100);
    }
  }

  public async get(name: string, lang?: 'rus' | 'eng' | 'chn') {
    await this.awaitList();
    const lowered = name.toLowerCase();
    const country = this.list.countries.find((country) =>
      !lang
        ? country.eng.toLowerCase() === lowered ||
          country.rus.toLowerCase() === lowered ||
          country.chn.toLowerCase() === lowered
        : country[lang].toLowerCase() === lowered
    );
    if (country) return country;
    throw new Error(`Country ${name} not found`);
  }

  public async toNumber(name: string, lang?: 'rus' | 'eng' | 'chn') {
    const country = await this.get(name, lang);
    return country.id;
  }
}
