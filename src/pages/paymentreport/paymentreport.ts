import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';



/**
 * Generated class for the Paymentreport page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-paymentreport',
  templateUrl: 'paymentreport.html',
})
export class Paymentreport {
    @ViewChild('lineCanvas') lineCanvas;
    lineChart: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad Paymentreport');

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
                labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
                datasets: [
                  {
                        label: "Parking Cost",
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 2,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 3,
                        pointRadius: 1,
                        pointHitRadius: 15,
                        data: [2000, 750, 575, 345, 1052],
                        spanGaps: false,
                    }
                ]
            }
 
        });
 
    }


  }
