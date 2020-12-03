import {CountryEntity} from './country.entity';

export class CountriesResponseEntity {
  public status: string;
  public countries: Array<CountryEntity>;
  constructor() {
  }
}
