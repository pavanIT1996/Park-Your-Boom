import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usersignup } from '../usersignup/usersignup';
import { Ownersignup } from '../ownersignup/ownersignup';

/**
 * Generated class for the Singupselect page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-singupselect',
  templateUrl: 'singupselect.html',
})
export class Singupselect {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Singupselect');
  }
nextsingupuser(){
    this.navCtrl.push(Usersignup);
  }
  nextsingupowner(){
    this.navCtrl.push(Ownersignup);
  }
}
