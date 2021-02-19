import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {QuestEntity} from '../entities/quest.entity';
import {QuestionEntity} from '../entities/question-entity';

@Component({
  selector: 'app-quest-form',
  templateUrl: './quest-form.component.html',
  styleUrls: ['./quest-form.component.scss']
})
export class QuestFormComponent implements OnInit {

  public editor = ClassicEditor;

  @Input() quest: QuestEntity;
  @Output() updateCountryEvent: EventEmitter<QuestEntity> = new EventEmitter<QuestEntity>();

  constructor() { }

  ngOnInit(): void {
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
