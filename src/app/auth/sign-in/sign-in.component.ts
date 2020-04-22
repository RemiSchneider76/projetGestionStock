import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  errorMessage: string;

  constructor(private fB:FormBuilder,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
   this.signInForm = this.fB.group( 
      {email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })
  }

  onSubmit() {
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value
    this.auth.signInUser(email, password).then(
      () => {
        this.router.navigate(['produits'])
      },
      (error) => {
        this.errorMessage = error;
      }
    )
  }

}
