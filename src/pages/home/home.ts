import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PartnersProvider } from './../../providers/partners/partners';

import { SigninPage } from '../signin/signin';
import { BarPage } from './../bar/bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages = 1;
  indexOfPartners: any;

  constructor(
    public navCtrl: NavController,
    private partnersProvider: PartnersProvider
  ) { }

  ionViewDidEnter() {
    this.partnersProvider.getIndexOfPartners(this.pages).then(data => {
      this.indexOfPartners = data;
    });
  }

  openCard(id) {
    this.partnersProvider.showPartner(id)
      .then(data => {
        console.log(data)
      });
  }

  doInfinite(infiniteScroll) {
    let arrayOfPartners;

    this.partnersProvider.getIndexOfPartners(++this.pages)
      .then(data => {
        arrayOfPartners = data;
      })
      .then(() => {
        for (let newPartner of arrayOfPartners) {
          this.indexOfPartners.push(newPartner);
        }
        this.pages = ++this.pages;
      });
    infiniteScroll.complete();
  }

  goToBar(bar) {
    console.log(bar);
    this.navCtrl.push(BarPage,{
      bar:bar
    })    
  }
}
