import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,ViewController } from 'ionic-angular';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ToastController, Platform, LoadingController, Loading,ActionSheetController} from 'ionic-angular';
import { HomePage } from '../home/home';
import {AngularFire, FirebaseListObservable,} from 'angularfire2';



import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera,CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';

/**
 * Generated class for the UserProfile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfile {

  lastImage: string = null;
  firestore = firebase.storage();
  loading: Loading;


  db: FirebaseListObservable<any>;
  addpro:FormGroup

  Fname:any
  Nic:any
  Mobile:any
  Email:any


 form1: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public af:AngularFire,public viewCtrl: ViewController,public camera:Camera, public transfer:Transfer, public file: File, public filePath: FilePath,public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController,public actionSheetCtrl: ActionSheetController, public formBuilder: FormBuilder) {
    this.db=af.database.list("/profiles");

      this.form1=formBuilder.group({

        email:['',Validators.compose([
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
          Validators.required])],
        Fname:['',Validators.compose([
          Validators.pattern('[ a-z|A-Z ]{1,30}'),
          Validators.pattern(''),
          Validators.required])],
        NIC:['',Validators.compose([
          Validators.pattern('[0-9|V|v|x|X]{1,10}'),
          Validators.required])],
        Mobile:['',Validators.compose([
          Validators.pattern('[0-9]{1,10}'),
          Validators.required])],
    
    });


  }


    
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfile');
  }
        nexthome(){
    this.navCtrl.push(HomePage);
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
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
uploadimage() {
   var targetPath = this.pathForImage(this.lastImage);
   var filename = this.lastImage;
    (<any>window).resolveLocalFileSystemURL(targetPath, (res) => {
      res.file((resFile) => {
        var reader = new FileReader();
        reader.readAsArrayBuffer(resFile);
        reader.onloadend = (evt: any) => {
          var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
          var imageStore = this.firestore.ref('/Users').child(`${filename}`);
           this.loading = this.loadingCtrl.create({
                  content: 'Uploading...',
             });
            if(res==true)
              this.loading.present();
          imageStore.put(imgBlob).then((res) => {
            alert('Upload Success');
          }).catch((err) => {
            alert('Upload Failed' + err);
          })
        }
      })
    })
  } 
// Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return this.file.dataDirectory + img;
  }
}




//////
       showErrorAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Enter All the Details',
      buttons: ['OK']
    });
    alert.present();
  }

     showSuccessAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Successfully Submitted',
      buttons: ['OK']
    });
    alert.present();
  }

  addContact(name,address,phone,city) {
    if(name==null||address==null||phone==null||city==null){
      this.showErrorAlert();
    }
    else{
    this.db.push({
        Fname:name,
        Nic:address,
        Mobile:phone,
        Email:city
    }).then( newContact => {
      this.showSuccessAlert();
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
  }
  
 /* showAlert(message:string){
    let alert = this.alertCtrl.create
  
  //fnamevalidation
  if(!txtFname.valid){
      if(txtFname.errors['minlength']) message += 'Please enter valid Full name';
      if(txtFname.errors['required']) message += 'Please enter Fullname';
  }
    //Nicvalidation
  if(!txtNic.valid){
      if(txtNic.errors['minlength']) message += 'Please enter valid Nic';
      if(txtNic.errors['required']) message += 'Please enter Nic';
  }
    //Mobilevalidation
  if(!txtMobile.valid){
      if(txtMobile.errors['minlength']) message += 'Please enter valid Mobile number';
      if(txtMobile.errors['required']) message += 'Please enter Mobile number';
  }
    //fnamevalidation
  if(!txtEmail.valid){
      if(txtEmail.errors['minlength']) message += 'Please enter valid Email';
      if(txtEmail.errors['required']) message += 'Please enter Email';
  }
  }*/


}


}
