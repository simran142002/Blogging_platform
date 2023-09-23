import { TestBed } from '@angular/core/testing';

import { BloggingServiceService } from './blogging-service.service';

describe('BloggingServiceService', () => {
  let service: BloggingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloggingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
