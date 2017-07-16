import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	showAuth: boolean;
	items: FirebaseListObservable<any[]>;
	user: Observable<firebase.User>;
	user_0 = {
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


	constructor(public navCtrl: NavController, db: AngularFireDatabase, public afAuth: AngularFireAuth) {
		this.items = db.list('/Test');
		this.user = afAuth.authState;
		this.showAuth = true;
		console.log(this.user);
	}

	signup(user_email, user_pwd) {
		//console.log(user_email + " " + user_pwd);
		firebase.auth().createUserWithEmailAndPassword(user_email, user_pwd).catch(function(error) {
			// Handle Errors here.
			//var errorCode = error.code;
			var errorMessage = error.message;
			// ...
		});
	}

	login(user_email, user_pwd) {
		firebase.auth().signInWithEmailAndPassword(user_email, user_pwd).catch(function(error) {
			// Handle Errors here.
			//var errorCode = error.code;
			var errorMessage = error.message;
			// ...
		});
		this.showAuth = false
	}

	logout() {
		firebase.auth().signOut().then(function() {
			// Sign-out successful.
			console.log(this.user);
			
		}).catch(function(error) {
			// An error happened.
		});
		this.showAuth = true;
	}

	funTest() {
		var stuff = {
			'name' : 'Michael',
			'height': '6\' 6'
		}
		this.items.push({'person' : stuff});
		console.log("Pushed to DB");
	}

}
