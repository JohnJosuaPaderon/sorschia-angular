import { TestBed } from '@angular/core/testing';

import { PermissionGroupRepositoryService } from './permission-group-repository.service';

describe('PermissionGroupRepositoryService', () => {
  let service: PermissionGroupRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermissionGroupRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
