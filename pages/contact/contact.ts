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
gender: string;
cicMessage: string;
  constructor(public navCtrl: NavController) {

   }
calculateCIC(){
if (this.gender = "m") {
 this.BMR = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
}
else if (this.gender= "f") {
  this.BMR = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
}

}

}
