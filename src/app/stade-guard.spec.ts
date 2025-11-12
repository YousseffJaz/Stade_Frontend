import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { stadeGuard } from './stade-guard';

describe('stadeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => stadeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
