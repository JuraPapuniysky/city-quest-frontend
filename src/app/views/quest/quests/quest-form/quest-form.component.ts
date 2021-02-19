import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {QuestEntity} from '../entities/quest.entity';
import {QuestionEntity} from '../entities/question-entity';
import {CountryEntity} from '../../../geo/countries/entities/country.entity';
import {CountryService} from '../../../geo/countries/services/country.service';

@Component({
  selector: 'app-quest-form',
  templateUrl: './quest-form.component.html',
  styleUrls: ['./quest-form.component.scss']
})
export class QuestFormComponent implements OnInit {

  public editor = ClassicEditor;

  public countryEntities: Array<CountryEntity> = [];
  public keyword: string = 'name';

  @Input() quest: QuestEntity;
  @Output() updateCountryEvent: EventEmitter<QuestEntity> = new EventEmitter<QuestEntity>();

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  selectCountryEvent(countryEntity: CountryEntity): void {
    this.quest.countryUuid = countryEntity.uuid;
  }

  onChangeSearchCountry(prefix: string): void {
    if (prefix.length >= 3) {
      this.countryService.searchCountries(prefix);
      this.countryEntities = this.countryService.getCountriesResponse().countries;
    }
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
