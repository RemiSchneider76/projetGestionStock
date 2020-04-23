import { Injectable} from '@angular/core';
import { Produit } from '../models/produit/produit.model';
import * as firebase from 'firebase'
import { ProduitListComponent } from '../produit-list/produit-list.component';
import { Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produit: Produit[] = []
  produitSubject = new Subject<Produit[]>();

  constructor() { }

  saveProduit() {
    firebase.database().ref('/produits').set(this.produit);
  }

  createNewProduit(newProduit: Produit) {
    this.produit.push(newProduit)
    this.saveProduit()
    
  }

  getProduits(component: ProduitListComponent){
    firebase.database().ref('/produits')
    .on('value', (data) => {
      this.produit = data.val() ? data.val() : [];
      component.produits = this.produit
    });
  }

  getProduitsById(id: number){
    return new Promise((resolve, reject) => {
      firebase.database().ref('/produits/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        )
      }
    )
  }
  
  emitProduits(){
    this.produitSubject.next(this.produit)
  }
}
