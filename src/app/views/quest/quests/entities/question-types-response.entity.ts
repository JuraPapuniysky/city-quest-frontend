import {QuestionTypeEntity} from './question-type.entity';

export class QuestionTypesResponseEntity {
  public status: string = '';
  public questionTypes: Array<QuestionTypeEntity> = [];
}
