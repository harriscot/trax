import { TestBed } from '@angular/core/testing';

import { TraxPuzzleService } from './trax-puzzle.service';

describe('TraxPuzzleService', () => {
  let service: TraxPuzzleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraxPuzzleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
