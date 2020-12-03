import { Component, OnInit } from '@angular/core';
import {CityEntity} from '../entities/city.entity';
import {CountryEntity} from '../../countries/entities/country.entity';
import {ActivatedRoute, Router} from '@angular/router';
import {CityService} from '../services/city.service';
import {CountryService} from '../../countries/services/country.service';

@Component({
  selector: 'app-city-update',
  templateUrl: './city-update.component.html',
  styleUrls: ['./city-update.component.scss']
})
export class CityUpdateComponent implements OnInit {

  public city: CityEntity = new CityEntity();
  public country: CountryEntity = new CountryEntity();

  constructor(
    private router: ActivatedRoute,
    private angularRouter: Router,
    private cityService: CityService,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.router.params.subscribe(async params => {
      await this.cityService.getCity(params.uuid);
      this.city = this.cityService.getCityResponse().city;
    });
  }

  updateCity(city: CityEntity) {
    this.cityService.updateCity(city);
    this.angularRouter.navigate(['/cities', city.countryUuid]);
  }
}
