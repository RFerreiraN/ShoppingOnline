import { Component, OnInit } from '@angular/core';
import { CartService } from './Service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Shopping App';
  cartItems : number = 0;
 
  constructor( 
    private cartService : CartService,
  ){

  }

  ngOnInit(): void {
    this.cartService.items.subscribe(items => {
      this.cartItems = items;
      console.log(items)
    })
  }



}
