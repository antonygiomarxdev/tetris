import { TestBed } from '@angular/core/testing';

import { GameEngineLibService } from './game-engine-lib.service';

describe('GameEngineLibService', () => {
  let service: GameEngineLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameEngineLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
