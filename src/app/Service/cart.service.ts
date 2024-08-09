import { Injectable, OnInit } from '@angular/core';
import { Modelos } from '../../Model/modelo';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { __values } from 'tslib';



@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{

  productList : Modelos [] = []
  private _product: BehaviorSubject<Modelos[]>
  private itemCart : BehaviorSubject<number>
  
  
  constructor(
    
  ) {
 this._product = new BehaviorSubject<Modelos[]>([]);
 this.itemCart = new BehaviorSubject<number>(0);
  }

   ngOnInit(): void {
   
   }

   get products(){
      return this._product.asObservable();
   }

   addProductCart(producto : Modelos){
      this.productList.push(producto);
      this._product.next(this.productList);
   }

   deleteProducts(index : number){
     this.productList.splice(index , 1)
     this._product.next(this.productList)
      
   }

   get items(){
    return this.itemCart.asObservable()
   }

   addNumbersItem(number: number) {
    let currentCartValue = this.itemCart.getValue();
    let updatedCartValue = currentCartValue + number;
    this.itemCart.next(updatedCartValue);
  }

   removeNumbersItem(number : number){
    let currentCartValue = this.itemCart.getValue();
    let updatedCartValue = currentCartValue - number;
    this.itemCart.next(updatedCartValue)
  }
  
  
}
