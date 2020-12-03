import {Component, OnInit} from '@angular/core';
import {CountryService} from './services/country.service';
import {ActivatedRoute} from '@angular/router';
import {CountryEntity} from './entities/country.entity';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  tableHeader = ['Uuid', 'Name', 'Iso Code', 'Description', ''];
  public countries: Array<CountryEntity> = [];

  constructor(private countryService: CountryService, private activatedRouter: ActivatedRoute) {
  }

  async ngOnInit() {
    await this.countryService.getCountries();
    this.countries = this.countryService.getCountriesResponse().countries;
  }

  deleteCountry(index: number, country: CountryEntity): void {
    this.countryService.deleteCountry(country).subscribe(data => {
      this.countries.splice(index, 1);
    }, error => {
      // TODO error message
    });
  }

}
