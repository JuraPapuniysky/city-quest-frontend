import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestUpdateComponent } from './quest-update.component';

describe('QuestUpdateComponent', () => {
  let component: QuestUpdateComponent;
  let fixture: ComponentFixture<QuestUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
