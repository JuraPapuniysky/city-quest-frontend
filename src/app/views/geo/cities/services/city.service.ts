import {Injectable} from '@angular/core';
import {CitiesResponseEntity} from '../entities/cities-response.entity';
import {CityResponseEntity} from '../entities/city-response.entity';
import {HttpClient} from '@angular/common/http';
import {CountryEntity} from '../../countries/entities/country.entity';
import {environment} from '../../../../../environments/environment';
import {CityEntity} from '../entities/city.entity';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  private apiUrl: string = environment.apiUrl;
  private citiesResponse: CitiesResponseEntity = new CitiesResponseEntity();
  private cityResponse: CityResponseEntity = new CityResponseEntity();

  constructor(private httpClient: HttpClient) {
  }

  async getCitiesFromApi(country: CountryEntity) {
    return new Promise((resolve, reject) => {
      this.httpClient.request('GET', `${this.apiUrl}/cities/${country.uuid}`).toPromise()
        .then((data: CitiesResponseEntity) => {
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
        .then((data: CityResponseEntity) => {
          this.cityResponse = data;
          resolve();
        }, error => {
          reject(error);
        });
    });
  }

  public getCitiesResponse(): CitiesResponseEntity {
    return this.citiesResponse;
  }

  async createCity(city: CityEntity) {
    return new Promise((resolve, reject) => {
      this.httpClient.post(`${this.apiUrl}/city`, city).toPromise()
        .then((data: CityResponseEntity) => {
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
        .then((data: CityResponseEntity) => {
          this.cityResponse = data;
          resolve();
        }, error => {
          reject(error);
        });
    });
  }

  async searchCities(countryUuid: string, prefix: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.apiUrl}/cities/search/${countryUuid}/${prefix}`).toPromise()
        .then((data: CitiesResponseEntity) => {
          this.citiesResponse = data;
          resolve();
        }, error => {
          reject(error);
        });
    });
  }

  public getCityResponse(): CityResponseEntity {
    return this.cityResponse;
  }
}
