import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Reservation } from '../pages/reservation/reservation';
import { Newslot } from '../pages/newslot/newslot';
import { Travellist } from '../pages/travellist/travellist';
import { Payment } from '../pages/payment/payment';
import {Feedback } from '../pages/feedback/feedback';
import {UserProfile} from '../pages/user-profile/user-profile';
import { Mapshow } from '../pages/mapshow/mapshow';
import {Admin} from '../pages/admin/admin';
import {Owner} from '../pages/owner/owner';
import { SlotOwnerUpdatetype } from '../pages/slot-owner-updatetype/slot-owner-updatetype';
import { Navigation } from '../pages/navigation/navigation';
 
import{AngularFireAuth} from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any=HomePage;

  pages: Array<{title: string, component: any,icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public afAuth:AngularFireAuth) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage,icon:'home' },
      //{ title: 'List', component: ListPage },
      { title: 'Map', component: Mapshow ,icon:'map'},
      { title: 'To-Travel-List', component: Travellist,icon:'car' },
      { title: 'New-Slot', component: Newslot,icon:'add'},
      { title: 'Payment', component: Payment,icon:'card' },
      { title: 'User-Profile', component: UserProfile ,icon:'person'},
      { title: 'Feedback', component: Feedback ,icon:'paper'}, 
      { title: 'Admin', component: Admin,icon:'game-controller-b' }, 
      { title: 'Owner', component: Owner,icon:'game-controller-b' }, 

    ];

   /* const authObserver=afAuth.subscribe(user=>{
      if(user){
        this.rootPage=Login;
        authObserver.unsubscribe();
      }
      else{
        this.rootPage=HomePage;
        authObserver.unsubscribe();
      }
    })*/
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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
