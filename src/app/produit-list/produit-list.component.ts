import { Component, OnInit, OnDestroy } from '@angular/core';
import { Produit } from '../models/produit/produit.model';
import { ProduitService } from '../Services/produit.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})
export class ProduitListComponent implements OnInit, OnDestroy {

  produits: Produit[];
  produitSubscription : Subscription;


  constructor(private pS: ProduitService, private rt: Router) { }

  ngOnInit(): void {
    this.produitSubscription = this.pS.produitSubject.subscribe(
      (produits: Produit[]) => {
        this.produits = this.produits;
      }
    );
   this.pS.getProduits(this);
   this.pS.emitProduits();
  }

  versNouveauProduit(){
    this.rt.navigate(['nouveauProduit']);
  }
  
  viewProduit(id:number){
    this.rt.navigate(['produit', id]);
  }
  ngOnDestroy() {
    this.produitSubscription.unsubscribe();
  }
}
