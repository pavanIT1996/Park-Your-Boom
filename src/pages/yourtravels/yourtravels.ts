import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Travellist } from '../travellist/travellist';
import { Geolocation } from '@ionic-native/geolocation';
import { ViewChild, ElementRef } from '@angular/core';

declare var google;

/**
 * Generated class for the Yourtravels page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-yourtravels',
  templateUrl: 'yourtravels.html',
})
export class Yourtravels {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation) {

    
  }

ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
  
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, err => {
      console.log(err);
    });
    
    
  }

 currentlocation(){
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
  
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }, err => {
      console.log(err);
    });
  }
 // ionViewDidLoad() {
    //console.log('ionViewDidLoad Yourtravels');
 // }
backtotravelEdit(){
  this.navCtrl.push(Travellist);
}


showMarker(){ 
    console.log("Before")
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(6.916034, 79.971711)
    });
    console.log(marker)
    console.log("After")
    let content = "<h4>Information!</h4>";          
  
    this.addInfoWindow(marker, content);
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
}
