import { TestBed } from '@angular/core/testing';

import { PlatformRepositoryService } from './platform-repository.service';

describe('PlatformRepositoryService', () => {
  let service: PlatformRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
