import { TestBed } from '@angular/core/testing';

import { ApplicationRepositoryService } from './application-repository.service';

describe('ApplicationRepositoryService', () => {
  let service: ApplicationRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
