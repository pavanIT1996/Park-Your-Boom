import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { OnInit } from '@angular/core';


import {} from '@types/googlemaps';


/**
 * Generated class for the Findlocation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-findlocation',
  templateUrl: 'findlocation.html',
})
export class Findlocation implements OnInit {

  

 autocompleteItems: any;
autocomplete: any;
acService:any;
placesService: any;

constructor() { 
}

ngOnInit() {
  this.acService = new google.maps.places.AutocompleteService();        
  this.autocompleteItems = [];
  this.autocomplete = {
  query: ''
  };        
}



updateSearch() {
  console.log('modal > updateSearch');
  if (this.autocomplete.query == '') {
    this.autocompleteItems = [];
    return;
  }
  let self = this; 
  let config = { 
  types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
  input: this.autocomplete.query, 
  componentRestrictions: { country: 'AR' } 
}
this.acService.getPlacePredictions(config, function (predictions, status) {
  console.log('modal > getPlacePredictions > status > ', status);
  self.autocompleteItems = [];            
  predictions.forEach(function (prediction) {              
    self.autocompleteItems.push(prediction);
  });
});
}

}
  


