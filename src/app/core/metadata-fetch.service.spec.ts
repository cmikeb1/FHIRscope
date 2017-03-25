import {TestBed, inject} from '@angular/core/testing';

import {MetadataFetchService} from './metadata-fetch.service';

describe('MetadataFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetadataFetchService]
    });
  });

  it('should ...', inject([MetadataFetchService], (service: MetadataFetchService) => {
    expect(service).toBeTruthy();
  }));
});
