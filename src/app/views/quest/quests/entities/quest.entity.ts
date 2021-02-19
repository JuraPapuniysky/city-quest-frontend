import {QuestionEntity} from './question-entity';

export class QuestEntity {
  public uuid: string = '';
  public name: string = '';
  public countryUuid: string = '';
  public cityUuid: string = '';
  public description: string = '';
  public questionEntities: Array<QuestionEntity> = [];
}
