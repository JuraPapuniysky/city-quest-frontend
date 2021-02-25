import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {QuestEntity} from '../entities/quest.entity';
import {QuestionEntity} from '../entities/question-entity';
import {CountryEntity} from '../../../geo/countries/entities/country.entity';
import {CountryService} from '../../../geo/countries/services/country.service';
import {CityEntity} from '../../../geo/cities/entities/city.entity';
import {CityService} from '../../../geo/cities/services/city.service';
import {QuestionTypeEntity} from '../entities/question-type.entity';

@Component({
  selector: 'app-quest-form',
  templateUrl: './quest-form.component.html',
  styleUrls: ['./quest-form.component.scss']
})
export class QuestFormComponent implements OnInit {

  public editor = ClassicEditor;

  public countryEntities: Array<CountryEntity> = [];
  public cityEntities: Array<CityEntity> = [];
  public keyword: string = 'name';

  @Input() quest: QuestEntity;
  @Input() questionTypes: Array<QuestionTypeEntity>;
  @Output() updateCountryEvent: EventEmitter<QuestEntity> = new EventEmitter<QuestEntity>();

  constructor(private countryService: CountryService, private cityService: CityService) {
  }

  ngOnInit(): void {
  }

  selectCountryEvent(countryEntity: CountryEntity): void {
    this.quest.countryUuid = countryEntity.uuid;
  }

  async onChangeSearchCountry(prefix: string) {
    if (prefix.length > 1) {
      this.countryService.searchCountries(prefix);
      this.countryEntities = this.countryService.getCountriesResponse().countries;
    }
  }

  selectCityEvent(cityEntity: CityEntity): void {
    this.quest.cityUuid = cityEntity.uuid;
  }

  onChangeSearchCity(prefix: string): void {
    if (this.quest.countryUuid !== null) {
      if (prefix.length > 1) {
        this.cityService.searchCities(this.quest.countryUuid, prefix);
        this.cityEntities = this.cityService.getCitiesResponse().cities;
      }
    }
  }

  onFocusedCountry(event: any): void {

  }

  onFocusedCity(event: any): void {

  }

  onSubmit(quest: QuestEntity) {
    this.updateCountryEvent.emit(this.quest);
  }

  addQuestion(): void {
    this.quest.questionEntities.push(new QuestionEntity());
  }

  saveQuestion(questionEntity: QuestionEntity, index: number): void {
    this.quest.questionEntities[index] = questionEntity;
  }

  deleteQuestion(index: number): void {
    if (index > -1) {
      this.quest.questionEntities.splice(index, 1);
    }
  }

}
