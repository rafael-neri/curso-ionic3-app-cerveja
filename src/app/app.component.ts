import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';

import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    events: Events
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      events.subscribe('user:loaded', () => {
        this.rootPage = HomePage;
      });
    });
  }
}

