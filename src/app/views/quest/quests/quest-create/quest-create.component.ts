import { Component, OnInit } from '@angular/core';
import {QuestEntity} from '../entities/quest.entity';
import {QuestionEntity} from '../entities/question-entity';

@Component({
  selector: 'app-quest-create',
  templateUrl: './quest-create.component.html',
  styleUrls: ['./quest-create.component.scss']
})
export class QuestCreateComponent implements OnInit {

  public questEntity: QuestEntity = new QuestEntity();
  public questionEntities: Array<QuestionEntity> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addQuestion(): void {
    this.questionEntities.push(new QuestionEntity());
  }
}
