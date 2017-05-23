import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
export declare class LoginService {
    http: Http;
    private OauthLoginEndPointUrl;
    private clientId;
    private clientSecret;
    constructor(http: Http);
    login(username: any, password: any): Observable;
    logout(): void;
}
