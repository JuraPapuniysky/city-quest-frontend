import { Injectable } from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {QuestEntity} from '../entities/quest.entity';
import {QuestResponseEntity} from '../entities/quest-response.entity';
import {QuestsResponseEntity} from '../entities/quests-response.entity';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  private apiUrl = environment.apiUrl;
  private questResponseEntity: QuestResponseEntity;
  private questsResponseEntity: QuestsResponseEntity;

  constructor(private httpClient: HttpClient) { }

  async getQuests() {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.apiUrl}/quests`).toPromise()
        .then((data: QuestsResponseEntity) => {
          this.questsResponseEntity = data;
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  async getQuest(uuid: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${this.apiUrl}/quest/${uuid}`).toPromise()
        .then((data: QuestResponseEntity) => {
            this.questResponseEntity = data;
            resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  createQuest(questEntity: QuestEntity) {
    return this.httpClient.post(`${this.apiUrl}/quest`, questEntity);
  }

  deleteQuest(questEntity: QuestEntity){
    return this.httpClient.delete(`${this.apiUrl}/quest/${questEntity.uuid}`);
  }

  public getQuestEntities(): Array<QuestEntity> {
    return this.questsResponseEntity.questEntities;
  }
}
