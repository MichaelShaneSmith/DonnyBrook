import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contacts = [{name: "Angel Morales", img_src:"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1902022_10153112284887030_3050539373453386031_n.jpg?oh=29f6b56e495001aee87fe9af45172de0&oe=59C63968", topics:["Politics","Religion"], id:0},{name: "Faustino Aguirre", img_src:"http://www.calit2.uci.edu/uploads/Media/Image/11.laptop.jpg", topics:["Religion","Religion"], id: 1}]
  chatPage = ChatPage;
  constructor(public navCtrl: NavController) {

  }

  getId(id) {
      //update server to get correct chat log and stuff
      //console.log(id)
  }
}

export class Chat {
    constructor(){

    }
}