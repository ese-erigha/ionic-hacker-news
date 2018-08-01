import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export interface PageInterface {
  title: string;
  pageName: string;
  icon: string;
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'NewsPage';
  
  pages: PageInterface[] = [
    { title: 'News', pageName: 'NewsPage', icon: 'logo-hackernews' },
    { title: 'Jobs', pageName: 'JobsPage', icon:'briefcase' }
  ];

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.pageName);
  }

  isActive(page:PageInterface){

    if(this.nav.getActive() && this.nav.getActive().name === page.pageName){
      return 'primary';
    }
    return;
  }
}
