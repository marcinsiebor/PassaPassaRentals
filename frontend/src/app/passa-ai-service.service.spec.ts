import { TestBed } from '@angular/core/testing';

import { PassaAiServiceService } from './passa-ai-service.service';

describe('PassaAiServiceService', () => {
  let service: PassaAiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassaAiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
