import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit/produit.model';
import { ProduitService } from '../Services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})
export class ProduitListComponent implements OnInit {

  produits: Produit[];

  constructor(private pS: ProduitService, private rt: Router) { }

  ngOnInit(): void {
   this.pS.getProduits(this)
  }

  versNouveauProduit(){
    this.rt.navigate(['nouveauProduit'])
  }
  
  viewProduit(id:number){
    this.rt.navigate(['produit', id]);
  }
}
