import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {QuestEntity} from '../entities/quest.entity';

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
    console.log(quest);
  }

}
