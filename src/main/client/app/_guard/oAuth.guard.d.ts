import { CanActivate, Router } from '@angular/router';
export declare class CanActivateViaOAuthGuard implements CanActivate {
    router: Router;
    constructor(router: Router);
    canActivate(): boolean;
}
