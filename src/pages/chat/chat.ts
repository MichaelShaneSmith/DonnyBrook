import { Component } from '@angular/core';
 import { NavController, NavParams } from 'ionic-angular';
 
 import { ContactPage } from '../contact/contact';
 
 @Component({
   selector: 'page-chat',
   templateUrl: 'chat.html',
 })
 export class ChatPage {
   messages = [{text: "Hello hows it going", user: "me"}, {text: "Oh not bad", user:"other"}]
   contactPage = ContactPage
 
 
   constructor(public navCtrl: NavController, public navParams: NavParams) {
   }
 
   sendMessage() {
     //send message to server
   }
 
   closeKeyboard() {
     
   }
 
   ionViewDidLoad() {
     console.log('ionViewDidLoad ChatPage');
   }
 
 }