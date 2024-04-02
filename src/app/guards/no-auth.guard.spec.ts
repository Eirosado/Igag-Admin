import { NoAuthGuard } from './no-auth.guard';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// Mock FirebaseService and UtilsService
class MockFirebaseService {
  getAuth() {
    return {
      onAuthStateChanged: (callback: (auth: any) => void) => {
        // Simulate no user authenticated
        callback(null);
      }
    };
  }
}

class MockUtilsService {
  routerLink(url: string) {
    // Do nothing in the mock
  }
}

describe('NoAuthGuard', () => {
  let guard: NoAuthGuard;
  let activatedRouteSnapshot: ActivatedRouteSnapshot;
  let routerStateSnapshot: RouterStateSnapshot;

  beforeEach(() => {
    // Initialize the guard with mock services
    guard = new NoAuthGuard();
    activatedRouteSnapshot = {} as ActivatedRouteSnapshot;
    routerStateSnapshot = {} as RouterStateSnapshot;
  });

  it('should allow access when no user is authenticated', () => {
    // Simulate no user authenticated
    const canActivateResult = guard.canActivate(activatedRouteSnapshot, routerStateSnapshot) as Observable<boolean>;
    canActivateResult.subscribe(result => {
      expect(result).toBe(true);
    });
  });

  it('should deny access and redirect when user is authenticated', () => {
    // Mock a user authenticated
    (guard as any).firebaseSvc.getAuth = () => ({
      onAuthStateChanged: (callback: (auth: any) => void) => {
        // Simulate user authenticated
        callback({});
      }
    });

    const utilsServiceSpy = jest.spyOn(MockUtilsService.prototype, 'routerLink');

    // Check if canActivate redirects and denies access
    const canActivateResult = guard.canActivate(activatedRouteSnapshot, routerStateSnapshot) as Observable<boolean>;
    canActivateResult.subscribe(result => {
      expect(result).toBe(false);
      expect(utilsServiceSpy).toHaveBeenCalledWith('/main/home');
    });
  });
});
