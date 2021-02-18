import {Component, Input, OnInit} from '@angular/core';
import {QuestionEntity} from '../../entities/question-entity';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input() questionEntity: QuestionEntity;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(questionEntity: QuestionEntity): void {

  }

}
