import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniSpotlightComponent } from './alumni-spotlight.component';

describe('AlumniSpotlightComponent', () => {
  let component: AlumniSpotlightComponent;
  let fixture: ComponentFixture<AlumniSpotlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniSpotlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
