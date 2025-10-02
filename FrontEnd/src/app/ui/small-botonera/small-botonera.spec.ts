import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBotonera } from './small-botonera';

describe('SmallBotonera', () => {
  let component: SmallBotonera;
  let fixture: ComponentFixture<SmallBotonera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallBotonera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallBotonera);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
