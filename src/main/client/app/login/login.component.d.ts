import { Http } from '@angular/http';
import { Router } from "@angular/router";
import 'rxjs/add/operator/catch';
export declare class LoginComponent {
    private http;
    private router;
    currentUser: any;
    constructor(http: Http, router: Router);
    getToken(): void;
}
