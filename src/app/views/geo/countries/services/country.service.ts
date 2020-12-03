import { Injectable } from '@angular/core';
import {CountriesResponseEntity} from '../entities/countries-response.entity';
import {CountryResponseEntity} from '../entities/country-response.entity';
import {CountryEntity} from '../entities/country.entity';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = environment.apiUrl;

  private countriesResponse: CountriesResponseEntity = new CountriesResponseEntity();

  private countryResponse: CountryResponseEntity = new CountryResponseEntity();

  private countryNavigate: CountryEntity = new CountryEntity();

  constructor(private httpClient: HttpClient) { }

  async getCountries() {
    return new Promise((resolve, reject) => {
      this.httpClient.request('GET', `${this.apiUrl}/countries`).toPromise()
        .then((data: CountriesResponseEntity) => {
          this.countriesResponse = data;
          resolve();
        }, error => {
          reject(error);
        });
    });
  }

  public getCountriesResponse(): CountriesResponseEntity {
    return this.countriesResponse;
  }

  async getCountry(uuid: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.request('GET', `${this.apiUrl}/country/${uuid}`).toPromise()
        .then((data: CountryResponseEntity) => {
          this.countryResponse = data;
          resolve();
        }, error => {
          reject(error);
        });
    });
  }

  public getCountryResponse(): CountryResponseEntity {
    return this.countryResponse;
  }

  async createCountry(country: CountryEntity) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(`${this.apiUrl}/country`, country).toPromise()
        .then((data: CountryResponseEntity) => {
          this.countryResponse = data;
          resolve();
        }, error => {
          reject(error);
        });
    });
  }

  async updateCountry(country: CountryEntity) {
    return new Promise((resolve, reject) => {
      this.httpClient.put(`${this.apiUrl}/country/${country.uuid}`, country).toPromise()
        .then((data: CountryResponseEntity) => {
          this.countryResponse = data;
          resolve();
        }, error => {
          reject(error);
        });
    });
  }

  public deleteCountry(country: CountryEntity) {
    return this.httpClient.delete(`${this.apiUrl}/country/${country.uuid}`);
  }

  public getCountryNavigate(): CountryEntity {
    return this.countryNavigate;
  }

  public setCountryNavigate(countryEntity: CountryEntity): void {
    this.countryNavigate = countryEntity;
  }
}
