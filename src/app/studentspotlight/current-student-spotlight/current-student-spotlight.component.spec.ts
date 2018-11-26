import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentStudentSpotlightComponent } from './current-student-spotlight.component';

describe('CurrentStudentSpotlightComponent', () => {
  let component: CurrentStudentSpotlightComponent;
  let fixture: ComponentFixture<CurrentStudentSpotlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentStudentSpotlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentStudentSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
