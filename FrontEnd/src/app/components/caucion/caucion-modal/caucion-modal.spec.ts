import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaucionModal } from './caucion-modal';

describe('CaucionModal', () => {
  let component: CaucionModal;
  let fixture: ComponentFixture<CaucionModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaucionModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaucionModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
