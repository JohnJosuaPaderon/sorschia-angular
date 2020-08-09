import { TestBed } from '@angular/core/testing';

import { ModuleRepositoryService } from './module-repository.service';

describe('ModuleRepositoryService', () => {
  let service: ModuleRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
