import { TestBed } from '@angular/core/testing';

import { FondosComunesInversionConfiguration } from './fondos-comunes-inversion-configuration';

describe('FondosComunesInversionConfiguration', () => {
  let service: FondosComunesInversionConfiguration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FondosComunesInversionConfiguration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
