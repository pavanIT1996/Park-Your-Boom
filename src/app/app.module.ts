import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Mapshow } from '../pages/mapshow/mapshow';
import { Parkingdetails } from '../pages/parkingdetails/parkingdetails';
import { Login } from '../pages/login/login';
import { Singupselect } from '../pages/singupselect/singupselect';
import { Usersignup } from '../pages/usersignup/usersignup';
import { Ownersignup } from '../pages/ownersignup/ownersignup';
import { Newslot } from '../pages/newslot/newslot';
import { Travellist } from '../pages/travellist/travellist';
import { Addnewtravel } from '../pages/addnewtravel/addnewtravel';
import { Yourtravels } from '../pages/yourtravels/yourtravels';
import { Payment } from '../pages/payment/payment';
import { Dopayment } from '../pages/dopayment/dopayment';
import { Paymenthistory } from '../pages/paymenthistory/paymenthistory';
import { Paymentreport } from '../pages/paymentreport/paymentreport';
import { SelectVehicleType } from '../pages/select-vehicle-type/select-vehicle-type';
import { SessionTimer } from '../pages/session-timer/session-timer';
import {Feedback } from '../pages/feedback/feedback';
import {ForgetPassword} from '../pages/forget-password/forget-password';
import {UserProfile} from '../pages/user-profile/user-profile';
import {Admin} from '../pages/admin/admin';
import {TodayTravelList} from '../pages/today-travel-list/today-travel-list'
import { Findlocation } from '../pages/findlocation/findlocation';
import { PageGmapAutocomplete } from '../pages/page-gmap-autocomplete/page-gmap-autocomplete';
import { ModalAutocompleteItems } from '../pages/modal-autocomplete-items/modal-autocomplete-items';
import { Navi} from '../pages/navi/navi';
import { Navigation } from '../pages/navigation/navigation';


import { AdminPayment} from '../pages/admin-payment/admin-payment';
import {Owner} from '../pages/owner/owner';

import { AdminMap } from '../pages/admin-map/admin-map';
import { AdminSlot } from '../pages/admin-slot/admin-slot';
import { AdminUser } from '../pages/admin-user/admin-user';
import { SendSms } from '../pages/send-sms/send-sms';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {  AlertController } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';

import {AngularFireModule} from 'angularfire2' ;
import { Reservation } from '../pages/reservation/reservation';
import { SlotOwnerUpdatetype } from '../pages/slot-owner-updatetype/slot-owner-updatetype';
import { Adminreservation } from '../pages/adminreservation/adminreservation';

import { Geolocation } from '@ionic-native/geolocation';
import {} from '@types/googlemaps';

import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { Chart } from 'chart.js';

export const config = {
    apiKey: "AIzaSyCUANBG1-_OByWXXIK0FkC5BEw5LVK5Lg0",
    authDomain: "park-your-boom-8857c.firebaseapp.com",
    databaseURL: "https://park-your-boom-8857c.firebaseio.com",
    projectId: "park-your-boom-8857c",
    storageBucket: "park-your-boom-8857c.appspot.com",
    messagingSenderId: "698984817975"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Mapshow,
    Parkingdetails,
    Login,
    Singupselect,
    Usersignup,
    Ownersignup,
    Newslot,
    Travellist,
    Addnewtravel,
    Yourtravels,
    Payment,
    Dopayment,
    Paymenthistory,
    Paymentreport,
    SelectVehicleType,
    SessionTimer,
    Reservation,
    ForgetPassword,
    Feedback,
    UserProfile,
    Admin,
    TodayTravelList,
    Findlocation,
    PageGmapAutocomplete,
    ModalAutocompleteItems,
    SlotOwnerUpdatetype,
    AdminMap,
    AdminSlot,
    AdminUser,
    Navi,
    Owner,
    Navigation,
    Adminreservation,
    AdminPayment
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Mapshow,
    Parkingdetails,
    Login,
    Singupselect,
    Usersignup,
    Ownersignup,
    Newslot,
    Travellist,
    Addnewtravel,
    Yourtravels,
    Payment,
    Dopayment,
    Paymenthistory,
    Paymentreport,
    SelectVehicleType,
    SessionTimer,
    Reservation,
    ForgetPassword,
    Feedback,
    UserProfile,
    Admin,
    TodayTravelList,
    Findlocation,
    PageGmapAutocomplete,
    ModalAutocompleteItems,
    SlotOwnerUpdatetype,
    AdminMap,
    AdminSlot,
    AdminUser,
    Navi,
    Owner,
    Navigation,
    Adminreservation,
    AdminPayment
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireModule,
    Geolocation,
    File,
    Transfer,
    Camera,
    FilePath,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
