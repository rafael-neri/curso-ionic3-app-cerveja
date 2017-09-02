import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';

import { PartnersProvider } from '../../providers/partners/partners';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private api: PartnersProvider
  ) {}


  

}
