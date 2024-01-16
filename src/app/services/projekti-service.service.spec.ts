import { TestBed } from '@angular/core/testing';

import { ProjektiServiceService } from './projekti-service.service';

describe('ProjektiServiceService', () => {
  let service: ProjektiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjektiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
