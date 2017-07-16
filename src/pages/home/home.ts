import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {name: "Jessie", bio: "There's a snake in my boot."}
  language: any;
  genre: any;
  languages = ['Republican', 'Democratic', 'Other'];
  genres =['Rock', 'Rap', 'Country'];
  

  constructor(public navCtrl: NavController) {

  }

}
