import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {
    name: 'Paula Bolliger',
    profileImage: 'https://s-media-cache-ak0.pinimg.com/736x/33/7b/9b/337b9b91c388d3fc58fe0b95b6881b82--light-year-infinity.jpg',
    coverImage: 'https://a.dilcdn.com/bl/wp-content/uploads/sites/25/2016/11/ToyStory174.jpg',
    occupation: 'Villain',
    location: 'Andys House',
    description: 'A wise man once said: The more you do something, the better you will become at it.',
    followers: 456,
    following: 1052,
    posts: 35
  };

  language: any;
  genre: any;
  languages = ['Republican', 'Democratic', 'Other'];
  genres =['Rock', 'Rap', 'Country'];
  

  constructor(public navCtrl: NavController) {

  }


}
