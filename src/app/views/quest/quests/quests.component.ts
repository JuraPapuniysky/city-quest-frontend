import { Component, OnInit } from '@angular/core';
import {QuestService} from './services/quest.service';
import {CountryService} from '../../geo/countries/services/country.service';
import {CityService} from '../../geo/cities/services/city.service';
import {QuestEntity} from './entities/quest.entity';


@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss']
})
export class QuestsComponent implements OnInit {

  tableHeader = ['Uuid', 'Name', 'CountryUuid', 'CityUuid', 'Description', ''];

  quests: Array<QuestEntity> = [];

  constructor(private questService: QuestService, private countryService: CountryService, private cityService: CityService) { }

  ngOnInit(): void {
    this.questService.getQuests();
    this.quests = this.questService.getQuestEntities();
  }

  deleteQuest(index: number, quest: QuestEntity): void {
    this.questService.deleteQuest(quest).subscribe(data => {
      this.quests.splice(index, 1);
    }, error => {
      // TODO error message
    });
  }

}
