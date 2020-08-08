import { TestBed } from '@angular/core/testing';

import { SorschiaLibService } from './sorschia-lib.service';

describe('SorschiaLibService', () => {
  let service: SorschiaLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SorschiaLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
