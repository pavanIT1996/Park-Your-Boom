import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Mapshow } from '../mapshow/mapshow';
import { Parkingdetails } from '../parkingdetails/parkingdetails';
import { Login } from '../login/login';
import { Newslot } from '../newslot/newslot';
import { Travellist } from '../travellist/travellist';
import { Payment } from '../payment/payment';
import { Reservation } from '../reservation/reservation';
import { UserProfile } from '../user-profile/user-profile';
import { Feedback } from '../feedback/feedback';
import { Findlocation } from '../findlocation/findlocation';
import { PageGmapAutocomplete } from '../page-gmap-autocomplete/page-gmap-autocomplete';
import { ModalAutocompleteItems } from '../modal-autocomplete-items/modal-autocomplete-items';
import { SlotOwnerUpdatetype } from '../slot-owner-updatetype/slot-owner-updatetype';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

   
  }

logout(){
    this.navCtrl.setRoot(Login);
  }

  nextpage(){
    this.navCtrl.push(Mapshow);
  }
  parkingdet(){
    this.navCtrl.push(Parkingdetails);
  }
  nextlogin(){
    this.navCtrl.push(Login);
  }
nextnewslot(){
    this.navCtrl.push(Newslot);
  }
  nexttrvallist(){
    this.navCtrl.push(Travellist);
  }
 nextpayment(){
    this.navCtrl.push(Payment);
  }
  nextzone(){
    this.navCtrl.push(Reservation);
  }

     nextUprof(){
    this.navCtrl.push(UserProfile);
  }

     nextfeedback(){
    this.navCtrl.push(Feedback);
  }

  test(){
    this.navCtrl.push(Findlocation);
  }
  test1(){
    this.navCtrl.push(PageGmapAutocomplete);
  }
  test2(){
    this.navCtrl.push(ModalAutocompleteItems);
  }
  test3(){
    this.navCtrl.push(SlotOwnerUpdatetype);
  }
  navi(){
    this.navCtrl.push(Navigation);
  }
}
