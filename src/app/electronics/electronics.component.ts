import { Component, OnInit } from '@angular/core';
import { Modelos } from '../../Model/modelo';
import { ModelosService } from '../Service/modelos.service';
import { Router } from '@angular/router';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css',
  providers: [ModelosService]
})
export class ElectronicsComponent implements OnInit{
 
  public electronics: Modelos []

    constructor(
      private _modelosService : ModelosService,
      private router : Router,
      private cartService : CartService
    ){
      this.electronics = []
    }

    ngOnInit(): void {
      this.getElectronic()
    }

    getElectronic(){
      this._modelosService.getElectronic().subscribe({
        next : (response) => this.electronics = (response),
        error: (err) => console.log(<any>err),
        complete : () => console.log(this.electronics)
      })
    }

    addCart(electronics : Modelos, number : number){
      this.cartService.addProductCart(electronics);
      this.cartService.addNumbersItem(number);
    }

    backToProducts(){
      this.router.navigate(['/productos'])
    }
}
