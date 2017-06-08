import {Cookie} from './cookie';
import {Headers, Http, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';

export class Token {

  private static tokenServiceUrl: string = 'http://127.0.0.1:8081/authorization';

  public static getToken(login: String, password: String, http: Http): Observable<Response> {
    let loginData = 'grant_type=password&username=' + login + '&password=' + password + '&client_id=sampleClientId&client_secret=secret';
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options: RequestOptions = new RequestOptions({headers: headers});
    return http.post(this.tokenServiceUrl + '/oauth/token', loginData, options);
  }

  public static getOptionHeaderWithToken(): RequestOptions {
    let headers = new Headers({'Authorization': 'Bearer ' + Cookie.get('access_token')});
    return new RequestOptions({headers: headers});
  }

  public static removeToken(): void {
    Cookie.delete('access_token');
  }
}
