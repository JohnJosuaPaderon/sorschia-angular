import { TestBed } from '@angular/core/testing';

import { SorschiaApiClientLibService } from './sorschia-api-client-lib.service';

describe('SorschiaApiClientLibService', () => {
  let service: SorschiaApiClientLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SorschiaApiClientLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
