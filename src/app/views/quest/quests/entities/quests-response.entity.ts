import {QuestEntity} from "./quest.entity";

export class QuestsResponseEntity {
  public status: string;
  public questEntities: Array<QuestEntity>;
}
