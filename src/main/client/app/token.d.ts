import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
export declare class Token {
    private static tokenServiceUrl;
    static getToken(login: String, password: String, http: Http): Observable<Response>;
    static getOptionHeaderWithToken(): RequestOptions;
    static removeToken(): void;
}
