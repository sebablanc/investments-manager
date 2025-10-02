import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FciNew } from './fci-new';

describe('FciNew', () => {
  let component: FciNew;
  let fixture: ComponentFixture<FciNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FciNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FciNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
