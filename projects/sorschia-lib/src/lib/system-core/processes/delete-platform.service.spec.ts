import { TestBed } from '@angular/core/testing';

import { DeletePlatformService } from './delete-platform.service';

describe('DeletePlatformService', () => {
  let service: DeletePlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletePlatformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
