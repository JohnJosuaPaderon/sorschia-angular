import { TestBed } from '@angular/core/testing';

import { FullNameBuilderService } from './full-name-builder.service';

describe('FullNameBuilderService', () => {
  let service: FullNameBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullNameBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
