import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondosComunesInversion } from './fondos-comunes-inversion';

describe('FondosComunesInversion', () => {
  let component: FondosComunesInversion;
  let fixture: ComponentFixture<FondosComunesInversion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FondosComunesInversion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondosComunesInversion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
