import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppDevelopmentComponent } from './mobile-app-development.component';

describe('MobileAppDevelopmentComponent', () => {
  let component: MobileAppDevelopmentComponent;
  let fixture: ComponentFixture<MobileAppDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAppDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});