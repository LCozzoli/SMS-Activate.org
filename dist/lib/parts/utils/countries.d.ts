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
export declare class Countries {
    private query;
    private list;
    constructor(query: Query);
    private update;
    private awaitList;
    get(name: string, lang?: 'rus' | 'eng' | 'chn'): Promise<ICountry>;
    toNumber(name: string, lang?: 'rus' | 'eng' | 'chn'): Promise<number>;
}
//# sourceMappingURL=countries.d.ts.map