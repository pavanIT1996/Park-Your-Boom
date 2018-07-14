import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController, Platform, LoadingController, Loading,ActionSheetController} from 'ionic-angular';
import { AlertController ,ViewController  } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera,CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
/**
 * Generated class for the Newslot page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//var value;

@IonicPage()
@Component({
  selector: 'page-newslot',
  templateUrl: 'newslot.html',
})
export class Newslot {

public base64Image: string;
lastImage: string = null;
loading: Loading;
cordova:any;

Newslot: FirebaseListObservable<any>;
Vehicle: FirebaseListObservable<any>;
Districts: FirebaseListObservable<any>;
City: FirebaseListObservable<any>;

//myform:FormGroup;
firestore = firebase.storage();

public districts: any[];
public cities: any[];

public selectedDistricts: any[];
public selectedCities: any[];

public sCity:any;
public sDistrict:any;
public Address:any;
public Type: any;

public Row: any;
public Column: any;
public Capacity: any;

form1: FormGroup;
District: any;
city:any;
address:any;
type:any;
stime:any;
row:any;
col:any;
period:any;
Bikeprice:any;


form2: FormGroup;

captureDataUrl: string;
//sDistrict: string = this.navParams.get('email');

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public af: AngularFire,
  public formBuilder: FormBuilder,public viewCtrl: ViewController,public camera:Camera, public transfer: Transfer, public file: File, 
  public filePath: FilePath,public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController,
  public actionSheetCtrl: ActionSheetController)
  {
     this.Newslot = af.database.list('/Newslot');
     this.Vehicle = af.database.list('/Vehicle');
     this.Districts = af.database.list('/Districts');
     this.City = af.database.list('/City');
    
    
     //this.initializeDistrict();
     this.initializeCity();

     console.log('title', navParams.get('title'));

    /*this.myForm = formBuilder.group({
    firstName: ['value'],
    lastName: ['value', Validators.required],
    age: ['value', Validators.required]
  });*/
    this.form1=formBuilder.group({
        District:['',Validators.compose([
          Validators.required])],
        city:['',Validators.compose([
          Validators.required])],
        address:['',Validators.compose([
          Validators.maxLength(30),
          Validators.pattern('[0-9]*[a-zA-Z0-9]*'),
          Validators.required])],
        type:['',Validators.compose([
          Validators.required])],
        stime:['',Validators.compose([
          Validators.pattern('/^\d{1,2}:\d{2}:([AM])?$/'),
          Validators.required])],
        etime:['',Validators.compose([
           Validators.pattern('/^\d{1,2}:\d{2}:([PM])?$/'),
          Validators.required])],
        row:['',Validators.compose([
          Validators.required])],
        col:['',Validators.compose([
          Validators.required])],
        period:['',Validators.compose([
          Validators.required])],
    });
this.form2=formBuilder.group({
        period:['',Validators.compose([
          Validators.required])],
       BikeCheck:['',Validators.compose([
          Validators.required])],
        Bikeprice:['',Validators.compose([
          Validators.required])],
    });


  }



 
  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          icon: 'apps',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          icon: 'camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
        }
      ]
    });
    actionSheet.present();
  }

public takePicture(sourceType) {
  // Create options for the Camera Dialog
  var options = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true
  };
 
  // Get the data of an image
  this.camera.getPicture(options).then((imagePath) => {
    // Special handling for Android library
    if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
      this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
          let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        });
    } else {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    }
  }, (err) => {
    this.presentToast('Error while selecting image.');
  });
}

private createFileName() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  n + ".jpg";
  return newFileName;
}
 
// Copy the image to a local folder
private copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName,this.file.dataDirectory, newFileName).then(success => {
    this.lastImage = newFileName;
  }, error => {
    this.presentToast('Error while storing file.');
  });
}
 
private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}
 
// Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return this.file.dataDirectory + img;
  }
}




 uploadimage() {
   var targetPath = this.pathForImage(this.lastImage);
   var filename = this.lastImage;
    (<any>window).resolveLocalFileSystemURL(targetPath, (res) => {
      res.file((resFile) => {
        var reader = new FileReader();
        reader.readAsArrayBuffer(resFile);
        reader.onloadend = (evt: any) => {
          var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
          var imageStore = this.firestore.ref('/Newslot').child(`${filename}`);
          imageStore.put(imgBlob).then((res) => {
            alert('Upload Success');
          }).catch((err) => {
            alert('Upload Failed' + err);
          })
        }
      })
    })
  }
  showSuccesfulUploadAlert() {
    let alert = this.alertCtrl.create({
      title: 'Uploaded!',
      subTitle: 'Picture is uploaded to Firebase',
      buttons: ['OK']
    });
    alert.present();

    // clear the previous photo data in the variable
    this.captureDataUrl = "";
  }














 /* ngOnInit() {
    this.form = new FormGroup({
      sDistrict: new FormControl('', Validators.required),
      sCity: new FormControl('', Validators.minLength(3)),
      Address: new FormControl('', Validators.maxLength(10)),
      Type: new FormControl('', Validators.pattern('[A-Za-z]{5}'))
    });
  }*/
dismiss() {
   //this.viewCtrl.dismiss();
   this.navCtrl.pop();
 }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad Newslot');
  }

 
/*takePicture(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }*/

  addContact(District,City,Address,type,row,col,period,Bike,Bikeprice,TukTuk,Tukprice,
  Car,Carprice,Van,Vanprice,otime,etime,CoverSlot,GoodSurface,NearCity,Security,FairPrice) 
  {
    
    if(CoverSlot==null)
    {
      CoverSlot="false";
    }
    if(GoodSurface==null)
    {
      GoodSurface="false";
    }
    if(NearCity==null)
    {
      NearCity="false";
    }
    if(Security==null)
    {
      Security="false";
    }
    if(FairPrice==null)
    {
      FairPrice="false";
    }   

    if(type=="Free")
    {
        period="NULL"
        Vanprice="NULL";
    }


    if(Bike==null)
    {
      Bikeprice="NULL"
    }
    if(TukTuk==null)
    {
      Tukprice="NULL"
    }
    if(Car==null)
    {
      Carprice="NULL"
    }
    if(Van==null)
    {
      Vanprice="NULL"
    }
    var targetPath = this.pathForImage(this.lastImage);
    var filename = this.lastImage;
    if(District==null || City==null || Address==null || type==null || row==null || col==null || 
    period==null || otime==null || etime==null || Bikeprice==null || Tukprice==null || Carprice==null || Vanprice==null)
    {
      this.showErrorAlert();
    }
    else{
          this.Newslot.push({
          District: District.name,
          City: City,
          Address: Address,
          Type:type,
          Row:row,
          Col:col,
          Capacity:(row * col),
          Period:period,
          BikePrice:Bikeprice,
          TukPrice:Tukprice,
          CarPrice:Carprice,
          VanPrice:Vanprice,
          StartTime: otime,
          EndTime:etime,
          CoverSlot:CoverSlot,
          GoodSurface:GoodSurface,
          NearCity:NearCity,
          Security:Security,
          FairPrice:FairPrice,
          Image:this.lastImage,
          ImagePath:targetPath
          
      }).then( newContact => {
        this.showADDSuccessAlert();
        this.navCtrl.pop();
      }, error => {
        this. showErrorAlert();
        console.log(error);
      });
     }
  }


//District list
 /*initializeDistrict(){
    this.districts = [
        {id: 1, name: 'Ampara'},
        {id: 2, name: 'Anuradhapura'},
        {id: 3, name: 'Badulla'},
        {id: 4, name: 'Batticaloa'},
        {id: 5, name: 'Colombo'},
        {id: 6, name: 'Galle'},
        {id: 7, name: 'Gampaha'},
        {id: 8, name: 'Hambantota'},
        {id: 9, name: 'Jaffna'},
        {id: 10, name: 'Kalutara'},
        {id: 11, name: 'Kandy'},
        {id: 12, name: 'Kegalle'},
        {id: 13, name: 'Kilinochchi'},
        {id: 14, name: 'Kurunegala'},
        {id: 15, name: 'Mannar'},
        {id: 16, name: 'Matale'},
        {id: 17, name: 'Matara'},
        {id: 18, name: 'Monaragala'},
        {id: 19, name: 'Mullaitivu'},
        {id: 20, name: 'Nuwara Eliya'},
        {id: 21, name: 'Polonnaruwa'},
        {id: 22, name: 'Puttalam'},
        {id: 23, name: 'Ratnapura'},
        {id: 24, name: 'Trincomalee'},
        {id: 25, name: 'Vavuniya'}
    ];
  }*/
  

//City List
    initializeCity(){
    this.cities = [
        {id: 1, name: 'Colombo', district_id: 5},
        {id: 2, name: 'Kaduwela', district_id: 5},
        {id: 3, name: 'Malabe', district_id: 5},
        {id: 4, name: 'Adippala',  district_id: 5},
        {id: 5, name: 'Akarawita',  district_id: 5},
        {id: 6, name: 'Athurugiriya',  district_id: 5},
        {id: 7, name: 'Avissawella',  district_id: 5},
        {id: 8, name: 'Bambalapitiya',  district_id: 5},
        {id: 9, name: 'Batawala',  district_id: 5},
        {id: 10, name: 'Under Construction', district_id: 1},
        {id: 11, name: 'Under Construction',  district_id: 2},
        {id: 12, name: 'Under Construction',  district_id: 3},
        {id: 13, name: 'Under Construction',  district_id: 4},
        {id: 14, name: 'Under Construction',  district_id: 6},
        {id: 15, name: 'Under Construction',  district_id: 7},
        {id: 16, name: 'Under Construction',  district_id: 8},
        {id: 17, name: 'Under Construction',  district_id: 9},
        {id: 18, name: 'Under Construction',  district_id: 10}
    ];
    }

    /*setCityValues(sDistrict) {
        this.selectedCities= this.City.$ref.equalTo( => City.district_id == sDistrict.id);
    }*/

   setCityValues(sDistrict) {
        this.selectedCities = this.cities.filter(city => city.district_id == sDistrict.id);
    }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

/*setCityValues2(sDistrict){
  this.City = this.af.database.list('/City', {
    query: {
      orderByChild: 'district_id',
      equalTo: sDistrict.id,
    }
  });
}*/

  
   showSuccessAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Successfully Submitted',
      buttons: ['OK']
    });
    alert.present();
  }

   showErrorAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Enter the all values',
      buttons: ['OK']
    });
    
    alert.present();
  }


  //Add Successfull Alert
 showADDSuccessAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Successfully Added',
      buttons: ['OK']
    });
    alert.present();
  }
//Add Unsuccessfull Alert
   showADDErrorAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Add Unsuccessfull',
      buttons: ['OK']
    });
    
    alert.present();
  }
  

}
 