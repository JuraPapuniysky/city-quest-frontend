import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesMainComponent } from './cities-main.component';

describe('CitiesMainComponent', () => {
  let component: CitiesMainComponent;
  let fixture: ComponentFixture<CitiesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
