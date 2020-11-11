import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {CountriesResponse} from '../../entities/response/country/countries-response';
import {CountryResponse} from '../../entities/response/country/country-response';
import {CountryEntity} from '../../entities/country-entity';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string = environment.apiUrl;

  private countriesResponse: CountriesResponse = new CountriesResponse();

  private countryResponse: CountryResponse = new CountryResponse();

  private countryNavigate: CountryEntity = new CountryEntity();

  constructor(private httpClient: HttpClient) { }

  async getCountries() {
    return new Promise((resolve, reject) => {
      this.httpClient.request('GET', `${this.apiUrl}/countries`).toPromise()
        .then((data: CountriesResponse) => {
          this.countriesResponse = data;
          resolve();
        }, error => {
          reject(error);
        });
    });
  }

  public getCountriesResponse(): CountriesResponse {
    return this.countriesResponse;
  }

  async getCountry(uuid: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.request('GET', `${this.apiUrl}/country/${uuid}`).toPromise()
        .then((data: CountryResponse) => {
          this.countryResponse = data;
          resolve();
        }, error => {
          reject(error);
        });
    });
  }

  public getCountryResponse(): CountryResponse {
    return this.countryResponse;
  }

  async createCountry(country: CountryEntity) {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      headers = headers.append('Access-Control-Allow-Origin', '*');

      this.httpClient.post(`${this.apiUrl}/country`, country, {headers}).toPromise()
        .then((data: CountryResponse) => {
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
        .then((data: CountryResponse) => {
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

  getCountryNavigate(): CountryEntity {
    return this.countryNavigate;
  }

  setCountryNavigate(value: CountryEntity) {
    this.countryNavigate = value;
  }
}
