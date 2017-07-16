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

	items: FirebaseListObservable<any[]>;
	user: Observable<firebase.User>;
	//user_email: string;
	//user_pwd: string;


	constructor(public navCtrl: NavController, db: AngularFireDatabase, public afAuth: AngularFireAuth) {
		this.items = db.list('/Test');
		this.user = afAuth.authState;
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
	}

	logout() {
		firebase.auth().signOut().then(function() {
			// Sign-out successful.
			console.log(this.user);
		}).catch(function(error) {
			// An error happened.
		});
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
