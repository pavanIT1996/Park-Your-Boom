webpackJsonp([1],{

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmapModule", function() { return AdminmapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adminmap__ = __webpack_require__(891);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { IonicModule } from 'ionic-angular';

var AdminmapModule = (function () {
    function AdminmapModule() {
    }
    return AdminmapModule;
}());
AdminmapModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__adminmap__["a" /* Adminmap */],
        ],
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__adminmap__["a" /* Adminmap */]
        ]
    })
], AdminmapModule);

//# sourceMappingURL=adminmap.module.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Adminmap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adminreservation_adminreservation__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var image2 = 'assets/marker2.png';
//paid parking slot image
var image = 'assets/marker1.png';
var value = 99;
/**
 * Generated class for the Map page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Adminmap = (function () {
    function Adminmap(navCtrl, navParams, geolocation, platform, actionSheetCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        platform.ready().then(function () {
            _this.loadMap();
        });
    }
    Adminmap.prototype.loadMap = function () {
        var that = this;
        that.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 15,
            myLocationButton: true,
            indoorPicker: true,
        });
        that.infoWindow = new google.maps.InfoWindow;
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                that.infoWindow.setPosition(pos);
                that.infoWindow.setContent('Your Location.');
                that.infoWindow.open(that.map);
                that.map.setCenter(pos);
            }, function () {
                this.handleLocationError(true, that.infoWindow, that.map.getCenter(), that.map);
            });
        }
        else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, that.infoWindow, this.map.getCenter(), this.map);
        }
    };
    Adminmap.prototype.handleLocationError = function (browserHasGeolocation, infoWindow, pos, map) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    };
    Adminmap.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        console.log("Info windows");
        console.log(infoWindow);
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    Adminmap.prototype.addMarker = function () {
        console.log("Before");
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        console.log(marker);
        console.log("After");
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    Adminmap.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Select a slot first!',
            subTitle: 'Before see parking slot details select a slot first!',
            buttons: ['OK']
        });
        alert.present();
    };
    Adminmap.prototype.reservation = function () {
        if (value == 99) {
            this.showAlert();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__adminreservation_adminreservation__["a" /* Adminreservation */], {
                param1: value,
            });
        }
        value = 99;
    };
    Adminmap.prototype.free = function () {
        this.showMarker(),
            this.showMarker1(),
            this.showMarker4();
    };
    Adminmap.prototype.paid = function () {
        //this.showMarker1(),
        this.showMarker2(),
            this.showMarker3();
    };
    Adminmap.prototype.all = function () {
        this.free(),
            this.paid();
    };
    //malabe free foodcity parking
    Adminmap.prototype.showMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(6.914696, 79.972161),
            icon: image2
        });
        marker.addListener('click', function () {
            value = 1;
            console.log(value);
        });
        /*google.maps.event.addListener(marker, 'click',() => {
            //infoWindow.open(this.map, marker);
            //this.navCtrl.push(Parkingdetails);
        });*/
        //let content =this.navCtrl.push(Parkingdetails);
        //this.addInfoWindow(marker, content);
    };
    //dons baker free parking
    Adminmap.prototype.showMarker1 = function () {
        console.log("Before");
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(6.911496, 79.971933),
            icon: image2
        });
        marker.addListener('click', function () {
            value = 2;
            console.log(value);
        });
    };
    //paid parking slot gammunupura
    Adminmap.prototype.showMarker2 = function () {
        console.log("Before");
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(6.917322, 79.973696),
            icon: image
            //icon: freeimg
        });
        marker.addListener('click', function () {
            value = 5;
            console.log(value);
        });
    };
    //paid parking near zebra crossing
    Adminmap.prototype.showMarker3 = function () {
        console.log("Before");
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(6.912588, 79.972143),
            icon: image
        });
        marker.addListener('click', function () {
            value = 6;
            console.log(value);
        });
    };
    //free near highway parking
    Adminmap.prototype.showMarker4 = function () {
        console.log("Before");
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(6.923739, 79.977988),
            icon: image2
        });
        marker.addListener('click', function () {
            value = 3;
            console.log(value);
        });
    };
    Adminmap.prototype.currentlocation = function () {
        var that = this;
        that.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 15,
            myLocationButton: true,
            indoorPicker: true,
        });
        that.infoWindow = new google.maps.InfoWindow;
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                that.infoWindow.setPosition(pos);
                that.infoWindow.setContent('Your Location.');
                that.infoWindow.open(that.map);
                that.map.setCenter(pos);
            }, function () {
                this.handleLocationError(true, that.infoWindow, that.map.getCenter(), that.map);
            });
        }
        else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, that.infoWindow, this.map.getCenter(), this.map);
        }
    };
    return Adminmap;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
], Adminmap.prototype, "mapElement", void 0);
Adminmap = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-adminmap',template:/*ion-inline-start:"C:\Users\Pavan\pdmpro\src\pages\adminmap\adminmap.html"*/'<!--\n  Generated template for the Map page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Admin Map\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button>\n    </ion-buttons>  \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div #map id="map"></div>\n<ion-segment>\n  <button ion-button outline (click)="all()"><ion-icon ></ion-icon>  All   </button>\n  <button ion-button color="secondary" outline (click)="free()"><ion-icon ></ion-icon>  Free  </button>\n  <button ion-button color="danger" outline (click)="paid()"><ion-icon ></ion-icon>Paid</button>\n</ion-segment>\n  \n  <button ion-button  block (click) ="currentlocation()">currentlocation</button>\n  <button ion-button  block (click) ="reservation()">Parking Reservation</button>\n  <script>\n\n        </script>\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Pavan\pdmpro\src\pages\adminmap\adminmap.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */]])
], Adminmap);

//# sourceMappingURL=adminmap.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map