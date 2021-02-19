import { Component, OnInit } from '@angular/core';
import {QuestEntity} from '../entities/quest.entity';
import {QuestService} from '../services/quest.service';

@Component({
  selector: 'app-quest-create',
  templateUrl: './quest-create.component.html',
  styleUrls: ['./quest-create.component.scss']
})
export class QuestCreateComponent implements OnInit {

  public questEntity: QuestEntity = new QuestEntity();

  constructor(private questService: QuestService) { }

  ngOnInit(): void {
  }

  saveQuest(questEntity: QuestEntity): void {
    console.log(questEntity);
    this.questService.createQuest(questEntity).subscribe(data => {
      console.log(data);
    });
  }
}
