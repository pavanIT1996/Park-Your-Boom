import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {Parkingdetails} from '../parkingdetails/parkingdetails';
import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
declare var google;

//var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
//var image = 'https://lh5.googleusercontent.com/t45imE2tt24bonByd3jQDTUH3Gja5Vw2BOYw916ohiQJjLV15Vln4HiazAC3CBpUcKtotiV-5D-Dxps=w1366-h662';
//var freeimg='https://lh6.googleusercontent.com/C4h89bhgfdIs2fQ6T2tjTmnBLFH1vKkcD-Pw2TR6ZMmSZQno5nwKpVw5LSsRwxR4DX1fMCxYEf6GeZo=w1366-h662';
//free parking slot image
var image2 = 'assets/marker2.png';
//paid parking slot image
var image = 'assets/marker1.png';
var value= 99;
/**
 * Generated class for the Mapshow page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mapshow',
  templateUrl: 'mapshow.html',
})
export class Mapshow {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  infoWindow:any;
  //alertCtrl:any;
 
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation, public platform: Platform,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,) {
 
 platform.ready().then(() => {
    this.loadMap();
  });
  }
 

 //load map function
  loadMap(){
    let that = this;
    that.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 15,
          myLocationButton: true,
          indoorPicker: true,
        });
        that.infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }; 

            that.infoWindow.setPosition(pos);
            that.infoWindow.setContent('Your Location.');
            that.infoWindow.open(that.map);
            that.map.setCenter(pos);
          }, function() {
            this.handleLocationError(true, that.infoWindow, that.map.getCenter(),that.map);
          });
        } else {
          // Browser doesn't support Geolocation
          this.showAlert2();
          this.handleLocationError(false, that.infoWindow, this.map.getCenter(),this.map);
        }
    
  
  }
  
handleLocationError(browserHasGeolocation, infoWindow, pos,map) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
        

  addInfoWindow(marker, content){
  
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    console.log("Info windows")
    console.log(infoWindow)
  
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  
  }
  addMarker(){ 
    console.log("Before")
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    console.log(marker)
    console.log("After")
    let content = "<h4>Information!</h4>";          
  
    this.addInfoWindow(marker, content);
  }

showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Select a slot first!',
      subTitle: 'Before see parking slot details select a slot first!',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert2() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Check the Network Connection',
      buttons: ['OK']
    });
    alert.present();
  }




  ParkingDetails()
  {
    if(value==99){
            this.showAlert();


    }else{
    this.navCtrl.push(Parkingdetails,{
    param1: value,
    
    
});
}
value=99;
  }
free(){
  this.showMarker(),
  this.showMarker1(),
  this.showMarker4()

}
paid(){
  //this.showMarker1(),
  this.showMarker2(),
    this.showMarker3();
}
  all(){
      this.free(),
      this.paid()
      
      
    }
  
//malabe free foodcity parking
  showMarker(){ 
    
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      
      position: new google.maps.LatLng(6.914696, 79.972161),
      icon: image2
    });
    
      

 marker.addListener('click', function() {
   value = 1;
   console.log(value); 
        });
        
  }

//dons baker free parking
  showMarker1(){ 
    console.log("Before")
    
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(6.911496, 79.971933),
      icon: image2
      

    });
   marker.addListener('click', function() {
   value = 2;
   console.log(value); 
        });
  }
  //paid parking slot gammunupura
  showMarker2(){ 
    console.log("Before")
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(6.917322, 79.973696),
      icon: image
      //icon: freeimg

    });
    marker.addListener('click', function() {
   value = 5;
   console.log(value); 
        });
  }
    //paid parking near zebra crossing
    showMarker3(){ 
    console.log("Before")
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(6.912588, 79.972143),
      icon: image

    });
    marker.addListener('click', function() {
   value = 6;
   console.log(value); 
        });
  }
    //free near highway parking
    showMarker4(){ 
    console.log("Before")
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(6.923739, 79.977988),
      icon: image2

    });
    marker.addListener('click', function() {
   value = 3;
   console.log(value); 
        });
  }

currentlocation(){
  let that = this;
    that.map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 15,
          myLocationButton: true,
          indoorPicker: true,
        });
        that.infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }; 

            that.infoWindow.setPosition(pos);
            that.infoWindow.setContent('Your Location.');
            that.infoWindow.open(that.map);
            that.map.setCenter(pos);
          }, function() {
            this.handleLocationError(true, that.infoWindow, that.map.getCenter(),that.map);
          });
        } else {
          // Browser doesn't support Geolocation
          this.handleLocationError(false, that.infoWindow, this.map.getCenter(),this.map);
        }
}}