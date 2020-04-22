import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import * as firebase from 'firebase'
import { promise } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        }else {
          this.isAuth = false;
        }
      }
    )
  }



  onSignOut() {
    this.auth.signOutUser();
}
}
