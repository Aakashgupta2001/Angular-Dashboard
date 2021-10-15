import { TestBed } from '@angular/core/testing';

import { LogInSignUpAuthGuard } from './log-in-sign-up-auth.guard';

describe('LogInSignUpAuthGuard', () => {
  let guard: LogInSignUpAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogInSignUpAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
