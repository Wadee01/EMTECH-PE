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
DCI: number;
male: number;
female: number;
carbs: number;
protein: number;
fats: number;
A: number;
B: number;
C: number;
D: number;
E: number;
F: number;

gender: string;
lifestyle: string;
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
calculateDCI(){
this.DCI = this.BMR*(this.A + this.B +this.C +this.D +this.E +this.F);
this.DCI = parseFloat(this.DCI.toFixed(2));
this.carbs = this.DCI*0.600;
this.carbs = parseFloat(this.carbs.toFixed(2));
this.protein = this.DCI*0.125;
this.protein = parseFloat(this.protein.toFixed(2));
this.fats = this.DCI*0.275;
this.fats = parseFloat(this.fats.toFixed(2));

if (this.lifestyle = "sedentary") {
 this.A = 1.2
 this.B = 0
 this.C = 0
 this.D = 0
 this.E = 0
 this.F = 0
}
else if (this.lifestyle= "slightly_active") {
 this.A = 0
 this.B = 1.4
 this.C = 0
 this.D = 0
 this.E = 0
 this.F = 0
}
else if (this.lifestyle= "moderately_active") {
 this.A = 0
 this.B = 0
 this.C = 1.6
 this.D = 0
 this.E = 0
 this.F = 0
}
else if (this.lifestyle= "very_active") {
 this.A = 0
 this.B = 0
 this.C = 0
 this.D = 1.75
 this.E = 0
 this.F = 0
}
else if (this.lifestyle= "extra_active") {
 this.A = 0
 this.B = 0
 this.C = 0
 this.D = 0
 this.E = 2.0
 this.F = 0
}
else if (this.lifestyle= "professional_athelete") {
 this.A = 0
 this.B = 0
 this.C = 0
 this.D = 0
 this.E = 0
 this.F = 2.3
}
}
}
