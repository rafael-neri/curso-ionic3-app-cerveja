import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { UserInfoProvider } from '../user-info/user-info';

/*
  Generated class for the PartnersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PartnersProvider {

  constructor(public http: Http, private userInfo: UserInfoProvider) {
    
  }

  getIndexOfPartners(){
    
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-token', this.userInfo.accessToken);
        headers.append('Uid', this.userInfo.email);
        headers.append('Client', this.userInfo.client)
    
        let options = new RequestOptions({ headers: headers });
    
        return new Promise((resolve,reject) => {
          this.http.get(this.api_url + 'partners', options)
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          },(err)=>{
            reject(err)
          });
        });
      } 

}
