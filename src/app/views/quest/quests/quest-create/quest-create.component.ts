import {Component, OnInit} from '@angular/core';
import {QuestEntity} from '../entities/quest.entity';
import {QuestService} from '../services/quest.service';
import {QuestionTypeEntity} from '../entities/question-type.entity';

@Component({
  selector: 'app-quest-create',
  templateUrl: './quest-create.component.html',
  styleUrls: ['./quest-create.component.scss']
})
export class QuestCreateComponent implements OnInit {

  public questEntity: QuestEntity = new QuestEntity();
  public questionTypes: Array<QuestionTypeEntity>;

  constructor(private questService: QuestService) {

  }

  async ngOnInit() {
    await this.questService.getQuestionTypes();
    this.questionTypes = this.questService.getQuestionTypeResponseEntity().questionTypes;
  }

  saveQuest(questEntity: QuestEntity): void {
    console.log(questEntity);
    this.questService.createQuest(questEntity).subscribe(data => {
      console.log(data);
    });
  }
}
