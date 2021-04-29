import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css']
})
export class ContactPage {
height: number;
weight: number;
age: number;
BMR: number;
male: number;
female: number;
gender: string;
cicMessage: string;
  constructor(public navCtrl: NavController) {

   }
calculateBMR(){
this.BMR = (10 * this.weight + 6.25 * this.height - 5 * this.age + this.male - this.female);
this.BMR = parseFloat(this.BMR.toFixed(2));

if (this.gender = "m") {
 this.male = 5
 this.female = 0
}
else if (this.gender= "f") {
 this.male = 0
 this.female = 161
}

}

}
