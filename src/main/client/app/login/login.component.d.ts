import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
export declare class LoginComponent implements OnInit {
    router: Router;
    private loginService;
    constructor(router: Router, loginService: LoginService);
    login(event: any, username: any, password: any): void;
    ngOnInit(): void;
}
