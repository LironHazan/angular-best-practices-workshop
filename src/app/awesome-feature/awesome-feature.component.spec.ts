import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeFeatureComponent } from './awesome-feature.component';

describe('AwesomeFeatureComponent', () => {
  let component: AwesomeFeatureComponent;
  let fixture: ComponentFixture<AwesomeFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
