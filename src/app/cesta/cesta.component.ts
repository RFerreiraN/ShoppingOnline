import { Component, OnInit } from '@angular/core';
import { Modelos } from '../../Model/modelo';
import { ModelosService } from '../Service/modelos.service';
import { CartService } from '../Service/cart.service';



@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css',
  providers: [ModelosService]
})
export class CestaComponent implements OnInit{

   productos : Modelos [] = [];
   cartItems : number = 0;
  
   
    constructor(
      private cartService : CartService
    ){

    }
    ngOnInit() {
      this.cartService.products.subscribe( products => {
        this.productos = products;
      });
     

    }

    deleteProducts(index : number, number : number){
      this.cartService.deleteProducts(index);
      this.cartService.removeNumbersItem(number);
    }

   

   
  
  

 

    
   
}
