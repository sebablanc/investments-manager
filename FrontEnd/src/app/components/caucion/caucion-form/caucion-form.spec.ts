import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaucionForm } from './caucion-form';

describe('CaucionForm', () => {
  let component: CaucionForm;
  let fixture: ComponentFixture<CaucionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaucionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaucionForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
