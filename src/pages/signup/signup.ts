import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = { name: '', email: '', confirmEmail: '', password: '', confirmPassword: '' }

  submitted = false;

  constructor(
    public navCtrl: NavController,
    private api: AuthenticationProvider) { }

  onSubmit() {
    this.api.postAccount(this.user)
      .then(dado => {
        this.navCtrl.pop();
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }

  saveUser() {
  }

  back() {
    this.navCtrl.pop();
  }

}
