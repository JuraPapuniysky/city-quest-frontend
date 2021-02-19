import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionEntity} from '../../entities/question-entity';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input() questionEntity: QuestionEntity;
  @Input() index: number;

  @Output() questionEvent: EventEmitter<QuestionEntity> = new EventEmitter<QuestionEntity>();
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(): void {
    this.questionEvent.emit(this.questionEntity);
  }

  onDelete(): void {
    this.deleteEvent.emit(this.index);
  }
}
