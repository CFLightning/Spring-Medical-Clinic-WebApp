import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
export declare class HomeComponent {
    router: Router;
    private loginService;
    constructor(router: Router, loginService: LoginService);
    logout(): void;
}
