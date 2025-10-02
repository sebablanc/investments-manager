import { TestBed } from '@angular/core/testing';

import { MainConfiguration } from './main-configuration';

describe('MainConfiguration', () => {
  let service: MainConfiguration;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainConfiguration);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
