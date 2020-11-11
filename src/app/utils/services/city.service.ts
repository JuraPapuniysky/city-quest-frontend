import { Injectable } from '@angular/core';
import {CitiesResponse} from '../../entities/response/city/cities-response';
import {CityResponse} from '../../entities/response/city/city-response';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CountryEntity} from '../../entities/country-entity';
import {CityEntity} from '../../entities/city-entity';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private apiUrl: string = environment.apiUrl;
  private citiesResponse: CitiesResponse = new CitiesResponse();
  private cityResponse: CityResponse = new CityResponse();

  constructor(private httpClient: HttpClient) {
  }

  async getCitiesFromApi(country: CountryEntity) {
    return new Promise((resolve, reject) => {
      this.httpClient.request('GET', `${this.apiUrl}/cities/${country.uuid}`).toPromise()
        .then((data: CitiesResponse) => {
          this.citiesResponse = data;
          resolve();
        }, error => {
          reject(error);
        });
    });
  }

  async getCity(uuid: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.request('GET', `${this.apiUrl}/city/${uuid}`).toPromise()
        .then((data: CityResponse) => {
          this.cityResponse = data;
          resolve();
        }, error => {
          reject(error);
        });
    });
  }

  public getCitiesResponse(): CitiesResponse {
    return this.citiesResponse;
  }

  async createCity(city: CityEntity) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(`${this.apiUrl}/city`, city).toPromise()
        .then((data: CityResponse) => {
          this.cityResponse = data;
          resolve();
        }, error => {
          reject(error);
        });
    });
  }

  async updateCity(city: CityEntity) {
    return new Promise((resolve, reject) => {
      this.httpClient.put(`${this.apiUrl}/city/${city.uuid}`, city).toPromise()
        .then((data: CityResponse) => {
          this.cityResponse = data;
          resolve();
        }, error => {
          reject(error);
        });
    });
  }

  public getCityResponse(): CityResponse {
    return this.cityResponse;
  }
}
