import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTrainingComponent } from './free-training.component';

describe('FreeTrainingComponent', () => {
  let component: FreeTrainingComponent;
  let fixture: ComponentFixture<FreeTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
