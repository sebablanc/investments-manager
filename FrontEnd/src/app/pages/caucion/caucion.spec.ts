import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caucion } from './caucion';

describe('Caucion', () => {
  let component: Caucion;
  let fixture: ComponentFixture<Caucion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caucion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caucion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
