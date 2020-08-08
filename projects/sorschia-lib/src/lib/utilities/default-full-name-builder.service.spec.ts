import { TestBed } from '@angular/core/testing';

import { DefaultFullNameBuilderService } from './default-full-name-builder.service';

describe('DefaultFullNameBuilderService', () => {
  let service: DefaultFullNameBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultFullNameBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
