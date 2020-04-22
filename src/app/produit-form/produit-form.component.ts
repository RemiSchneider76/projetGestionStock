import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Produit } from '../models/produit/produit.model';
import { ProduitService } from '../Services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit-form',
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.scss']
})
export class ProduitFormComponent implements OnInit {

  formProduits: FormGroup;

  constructor(private fb: FormBuilder, private ps: ProduitService, private rt: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.formProduits = this.fb.group( {
      nom: ['', Validators.required],
      type: ['', Validators.required],
      nombre: ['', Validators.required]
    })
  }

  onSaveProduit() {
    const produit = new Produit (
      this.formProduits.get('nom').value,
      this.formProduits.get('type').value,
      this.formProduits.get('nombre').value
    )
    
    this.ps.createNewProduit(produit)
    this.rt.navigate(['/produits']);

  }


}
