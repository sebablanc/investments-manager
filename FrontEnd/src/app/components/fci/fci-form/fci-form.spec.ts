import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FciForm } from './fci-form';

describe('FciForm', () => {
  let component: FciForm;
  let fixture: ComponentFixture<FciForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FciForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FciForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
