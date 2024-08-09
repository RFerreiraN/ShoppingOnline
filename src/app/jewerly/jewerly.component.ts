import { Component , OnInit} from '@angular/core';
import { Modelos } from '../../Model/modelo';
import { ModelosService } from '../Service/modelos.service';
import { CartService } from '../Service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jewerly',
  templateUrl: './jewerly.component.html',
  styleUrl: './jewerly.component.css',
  providers: [ModelosService]
})
export class JewerlyComponent implements OnInit{

public jewerlys : Modelos [] = []
  constructor(
    private _modelosService : ModelosService,
    private cartService : CartService,
    private router : Router

  ){

  }

  ngOnInit(): void {
    this.getJewerly()
    
  }

  getJewerly(){
    this._modelosService.getJewerly().subscribe({
      next : (response) => this.jewerlys = response,
      error : (err) => console.log(<any>err),
      complete : () => {
        console.log(this.jewerlys)
      }
    })
  }

  addCart(jewerly : Modelos , number : number){
    this.cartService.addProductCart(jewerly);
    this.cartService.addNumbersItem(number)
  }

  backToProducts(){
    this.router.navigate(['/productos'])
  }
}
