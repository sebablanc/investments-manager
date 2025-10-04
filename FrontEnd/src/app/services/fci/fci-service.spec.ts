import { TestBed } from '@angular/core/testing';

import { FciService } from './fci-service';

describe('FciService', () => {
  let service: FciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
