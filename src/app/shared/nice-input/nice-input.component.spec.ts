import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiceInputComponent } from './nice-input.component';

describe('NiceInputComponent', () => {
  let component: NiceInputComponent;
  let fixture: ComponentFixture<NiceInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiceInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
