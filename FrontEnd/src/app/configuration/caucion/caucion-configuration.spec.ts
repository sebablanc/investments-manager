import { TestBed } from '@angular/core/testing';

import { CaucionConfiguration } from './caucion-configuration';

describe('CaucionConfiguration', () => {
  let service: CaucionConfiguration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaucionConfiguration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
