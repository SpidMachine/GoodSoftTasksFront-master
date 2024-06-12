import { TestBed } from '@angular/core/testing';

import { PhoneConsultationService } from './phone-consultation.service';

describe('PhoneConsultationService', () => {
  let service: PhoneConsultationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneConsultationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
