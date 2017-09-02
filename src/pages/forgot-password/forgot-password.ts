import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  email:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.email = this.navParams.get('email')
  }

  sendPassword(){

  }
}
