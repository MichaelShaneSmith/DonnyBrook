import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {
    name: 'Michael Smith',
    profileImage: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13775405_1401473769867978_5482203317042747458_n.jpg?oh=cf18bc0d2a32dc0636cfbab4687b66af&oe=59CAE525',
    coverImage: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13769430_1401473179868037_646529923203410133_n.jpg?oh=84af21bf109ee04ff8cdcb5920aa47d4&oe=59C4EEA4',
    occupation: 'Male',
    location: 'Hillsboro, Or',
    description: 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do',
    followers: 456,
    following: 1052,
    posts: 35
  };

  language: any;
  genre: any;
  religion: any;
  religions = ['Christianity', 'Islam', 'Other'];
  languages = ['Republican', 'Democratic', 'Other'];
  genres =['Rock', 'Rap', 'Country'];
  
Christianity
  constructor(public navCtrl: NavController) {

  }


}
