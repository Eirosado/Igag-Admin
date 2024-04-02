import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Observable } from 'rxjs';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should allow access if user is authenticated', (done) => {
    const mockRouteSnapshot = {} as ActivatedRouteSnapshot;
    const mockRouterStateSnapshot = {} as RouterStateSnapshot;
    const mockUser = 'mockUser';

    spyOn(localStorage, 'getItem').and.returnValue(mockUser);
    spyOn(guard.firebaseSvc, 'getAuth').and.returnValue({
      onAuthStateChanged: (callback: (auth: any) => void) => {
        callback({}); // Simulate authenticated user
      }
    });

    const canActivateResult = guard.canActivate(mockRouteSnapshot, mockRouterStateSnapshot);
    if (canActivateResult instanceof Observable) {
      canActivateResult.subscribe((result) => {
        expect(result).toBe(true);
        done();
      });
    } else {
      expect(canActivateResult).toBe(true);
      done();
    }
  });

  it('should redirect to sign-in page if user is not authenticated', (done) => {
    const mockRouteSnapshot = {} as ActivatedRouteSnapshot;
    const mockRouterStateSnapshot = {} as RouterStateSnapshot;
    const mockUser = null;

    spyOn(localStorage, 'getItem').and.returnValue(mockUser);
    spyOn(guard.firebaseSvc, 'getAuth').and.returnValue({
      onAuthStateChanged: (callback: (auth: any) => void) => {
        callback(null); // Simulate unauthenticated user
      }
    });
    spyOn(guard.firebaseSvc, 'signOut');

    const canActivateResult = guard.canActivate(mockRouteSnapshot, mockRouterStateSnapshot);
    if (canActivateResult instanceof Observable) {
      canActivateResult.subscribe((result) => {
        expect(result).toBe(false);
        expect(guard.firebaseSvc.signOut).toHaveBeenCalled();
        done();
      });
    } else {
      expect(canActivateResult).toBe(false);
      done();
    }
  });
});
