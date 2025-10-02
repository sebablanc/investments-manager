import { TestBed } from '@angular/core/testing';

import { CaucionService } from './caucion-service';

describe('CaucionService', () => {
  let service: CaucionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaucionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
