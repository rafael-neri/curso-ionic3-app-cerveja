import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@Injectable()
export class UserInfoProvider {
  name: string;
  email: string;
  accessToken: string;
  client:string;

  constructor(private storage: Storage, public events: Events) {
    this.storage.get('accessToken').then((accessToken) => {
      if(accessToken != null && accessToken != ''){
        this.accessToken = accessToken
      }
    });

    this.storage.get('client').then((client) => {
      if(client != null && client != ''){
        this.client = client
      }
    });

    this.storage.get('email').then((email) => {
      if(email != null && email != ''){
        this.email = email
        this.events.publish('user:loaded');
      }
    });
  }
}
