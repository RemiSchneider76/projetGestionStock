import { Component } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projetPersonnelle';
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDPTfMZraYu8T9cpE4SGzqM9hIwlXdrEIE",
      authDomain: "gestion-stock-2f6b6.firebaseapp.com",
      databaseURL: "https://gestion-stock-2f6b6.firebaseio.com",
      projectId: "gestion-stock-2f6b6",
      storageBucket: "gestion-stock-2f6b6.appspot.com",
      messagingSenderId: "331039478949",
      appId: "1:331039478949:web:60a83a8dc238211125a94c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
