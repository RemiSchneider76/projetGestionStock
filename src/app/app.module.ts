import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitViewComponent } from './produit-view/produit-view.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ProduitFormComponent } from './produit-form/produit-form.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './Services/auth-guard.service';

const routes: Routes = [
  {path: 'produits', canActivate:[AuthGuardService], component: ProduitListComponent },
  {path: 'nouveauProduit', canActivate:[AuthGuardService], component: ProduitFormComponent},  
  {path: 'produit/:id', canActivate:[AuthGuardService], component: ProduitViewComponent},
  {path: 'signIn', component: SignInComponent},
  {path: '', redirectTo:'produits', pathMatch:'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    ProduitListComponent,
    ProduitViewComponent,
    HeaderComponent, 
    SignInComponent,
    ProduitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
