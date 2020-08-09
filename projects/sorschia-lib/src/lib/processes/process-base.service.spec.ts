import { TestBed } from '@angular/core/testing';

import { ProcessBaseService } from './process-base.service';

describe('ProcessBaseService', () => {
  let service: ProcessBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
