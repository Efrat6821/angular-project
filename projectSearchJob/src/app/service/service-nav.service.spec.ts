import { TestBed } from '@angular/core/testing';

import { ServiceNavService } from './service-nav.service';

describe('ServiceNavService', () => {
  let service: ServiceNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
