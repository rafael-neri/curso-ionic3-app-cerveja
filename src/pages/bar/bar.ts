import { Component, ViewChild } from '@angular/core';
import { Slides, NavController, NavParams } from 'ionic-angular';

import { PartnersProvider } from './../../providers/partners/partners';

@Component({
  selector: 'page-bar',
  templateUrl: 'bar.html',
})
export class BarPage {
  @ViewChild(Slides) slides: Slides;
  
  drinkComponent = false;
  drink: any;
  barInfo: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private partnersProvider: PartnersProvider) {
    this.barInfo = this.navParams.get('bar');
  }

  ionViewDidLoad() {
    //Os slides já foram criados no constructor, agora posso manipulalos
    this.slides.slidesPerView = 3;
  }

  ionViewWillLoad(){
    this.partnersProvider.showPartner(this.barInfo.id)
    .then(data=>{
      this.barInfo = data
    });
  }

  chooseDrink(drink){
    console.log(drink);
    this.drink = drink;
    this.drinkComponent = true;
  }
  
  exit(){
    this.drinkComponent = false;
  }

  interestEvent(event){
    console.log(event);
  }
}
