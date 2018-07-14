
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ModalAutocompleteItems } from '../modal-autocomplete-items/modal-autocomplete-items';
import { ViewChild, ElementRef } from '@angular/core';

declare var google:any;

/**
 * Generated class for the PageGmapAutocomplete page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-page-gmap-autocomplete',
  templateUrl: 'page-gmap-autocomplete.html',
})
export class PageGmapAutocomplete {
@ViewChild('map') mapElement: ElementRef;
    address:any = {
        place: '',
        set: false,
    };
    placesService:any;
    map: any;
    markers = [];
    placedetails: any;

    constructor(public navCtrl: NavController,public modalCtrl: ModalController,public geolocation: Geolocation) { 
    }
    
    ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(6.914736, 79.972951);
  
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
  
 

   /* ionViewDidLoad() {
        this.initMap();
        //this.initPlacedetails();
    }

   /* showModal() {
        // reset 
        this.reset();
        // show modal|
        let modal = this.modalCtrl.create(ModalAutocompleteItems);
        modal.onDidDismiss(data => {
            console.log('page > modal dismissed > data > ', data);
            if(data){
                this.address.place = data.description;
                // get details
                this.getPlaceDetail(data.place_id);
            }                
        })
        modal.present();
    }

    reset() {
        this.initPlacedetails();
        this.address.place = '';
        this.address.set = false;
    }

    getPlaceDetail(place_id:string):void {
        var self = this;
        var request = {
            placeId: place_id
        };
        this.placesService = new google.maps.places.PlacesService(this.map);
        this.placesService.getDetails(request, callback);
        function callback(place, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log('page > getPlaceDetail > place > ', place);
                // set full address
                self.placedetails.address = place.formatted_address;
                self.placedetails.lat = place.geometry.location.lat();
                self.placedetails.lng = place.geometry.location.lng();
                for (var i = 0; i < place.address_components.length; i++) {
                    let addressType = place.address_components[i].types[0];
                    let values = {
                        short_name: place.address_components[i]['short_name'],
                        long_name: place.address_components[i]['long_name']
                    }
                    if(self.placedetails.components[addressType]) {
                        self.placedetails.components[addressType].set = true;
                        self.placedetails.components[addressType].short = place.address_components[i]['short_name'];
                        self.placedetails.components[addressType].long = place.address_components[i]['long_name'];
                    }                                     
                }                  
                // set place in map
                self.map.setCenter(place.geometry.location);
                self.createMapMarker(place);
                // populate
                self.address.set = true;
                console.log('page > getPlaceDetail > details > ', self.placedetails);
            }else{
                console.log('page > getPlaceDetail > status > ', status);
            }
        }
    }*/

   /* initMap() {

      
       this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(6.914736, 79.972951);
  
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

  /*  createMapMarker(place:any):void {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: this.map,
          position: placeLoc
        });    
        this.markers.push(marker);
    }

    initPlacedetails() {
        this.placedetails = {
            address: '',
            lat: '',
            lng: '',
            components: {
                route: { set: false, short:'', long:'' },                           // calle 
                street_number: { set: false, short:'', long:'' },                   // numero
                sublocality_level_1: { set: false, short:'', long:'' },             // barrio
                locality: { set: false, short:'', long:'' },                        // localidad, ciudad
                administrative_area_level_2: { set: false, short:'', long:'' },     // zona/comuna/partido 
                administrative_area_level_1: { set: false, short:'', long:'' },     // estado/provincia 
                country: { set: false, short:'', long:'' },                         // pais
                postal_code: { set: false, short:'', long:'' },                     // codigo postal
                postal_code_suffix: { set: false, short:'', long:'' },              // codigo postal - sufijo
            }    
        };        
    }    */
}
