import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CountryEntity} from '../../countries/entities/country.entity';
import {CityEntity} from '../entities/city.entity';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {

  public editor = ClassicEditor;

  @Input() country: CountryEntity;
  @Input() city: CityEntity;
  @Output() cityEvent: EventEmitter<CityEntity> = new EventEmitter<CityEntity>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.cityEvent.emit(this.city);
  }

}
