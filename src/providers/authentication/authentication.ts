import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

//Services
import { UserInfoProvider } from './../user-info/user-info';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  api_url: string = 'https://cerveja-api.herokuapp.com';

  constructor(
    public http: Http,
    private userInfo: UserInfoProvider,
    private storage: Storage
  ) { }

  login(email: string, password: string) {
    let headers = new Headers();
    headers.append('Content-type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({ headers: headers });

    let body = new URLSearchParams();
    body.append('email', email);
    body.append('password', password);

    return new Promise((resolve, reject) => {
      this.http.post(this.api_url + '/auth/sign_in', body, options)
        .map(response => {
          this.userInfo.accessToken = response.headers.get("access-token");
          this.userInfo.client = response.headers.get("client");
          this.userInfo.email = response.headers.get("uid");

          // Setting Storage
          this.storage.set('accessToken', this.userInfo.accessToken);
          this.storage.set('client', this.userInfo.client);
          this.storage.set('email', this.userInfo.email);
          return response.json();
        })
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        });
    });
  }

  postAccount(user) {
    let headers = new Headers();
    headers.append('Content-type', 'application/x-www-form-urlencoded');

    let options = new RequestOptions({ headers: headers });

    let body = new URLSearchParams();
    body.append('user[name]', user.name);
    body.append('user[email]', user.email);
    body.append('user[email_confirmation]', user.confirmEmail);
    body.append('user[password]', user.password);
    body.append('user[password_confirmation]', user.confirmPassword);

    return new Promise((resolve, reject) => {
      this.http.post(this.api_url + '/users', body, options)
        .map(response => response.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        });
    });
  }

}
