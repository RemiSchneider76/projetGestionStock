import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit/produit.model';
import { ProduitService } from '../Services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-produit-view',
  templateUrl: './produit-view.component.html',
  styleUrls: ['./produit-view.component.scss']
})
export class ProduitViewComponent implements OnInit {
  
  produit: Produit;
  nomForm: FormGroup;
  cateForm: FormGroup;
  nombreForm: FormGroup;
  formNumber: string;

  
  constructor(private pS: ProduitService,
              private route: ActivatedRoute,
              private rt: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.produit = new Produit('', '','');
    const id = this.route.snapshot.params['id'];
    this.pS.getProduitsById(id).then(
      (produit: Produit) => {
        this.produit = produit;
      }
    );
    this.initNomForm()
    this.initCategorieForm()
    this.initNombreForm()
  }

  
  initNomForm(){
    this.nomForm = this.fb.group({
      "nom":['', Validators.required]
    })
  }
  initCategorieForm(){
    this.cateForm = this.fb.group({
      "categorie":['', Validators.required]
    })
  }
  initNombreForm(){
    this.nombreForm = this.fb.group({
      "nombre":['', Validators.required]
    })
  }

  setNom() {
    const nom = this.nomForm.get('nom').value
    const id = this.route.snapshot.params['id'];
    firebase.database().ref('/produits/' + id).update({
      "nom": nom
    })
    this.rt.navigate(['/produit/' + id]);
  }

  setCategorie() {
    const categorie = this.cateForm.get('categorie').value
    const id = this.route.snapshot.params['id'];
    firebase.database().ref('/produits/' + id).update({
      "categorie": categorie
    })
    this.rt.navigate(['/produit/' +id]);
  }

  setNombre() {
    const nombre = this.nomForm.get('nombre').value
    const id = this.route.snapshot.params['id'];
    firebase.database().ref('/produits/' + id).update({
      "nombre": nombre
    })
    this.rt.navigate(['/produit/' +id]);
    
  }

  retour(){
    this.formNumber = "0"
  }
  afficherNomForm(){
    this.formNumber = "1"
  }
  afficherCategorieForm(){
    this.formNumber = "2"
  }
  afficherNombreForm(){
    this.formNumber = "3"
  }
}
