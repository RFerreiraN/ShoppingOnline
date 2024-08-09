import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { map } from 'rxjs';
import { FormModel } from '../../Model/formModel';
import { GiftCard } from '../../Model/formModel';
import { Transfer } from '../../Model/formModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent implements OnInit{

   total : number = 0;
   public formModel : FormModel;
   public showDisplay: boolean = false;
   public giftCard : GiftCard;
   public displayGiftCard : boolean = false;
   public transfer : Transfer;
   public displayTransfer : boolean = false;
   public displayPayment : boolean = false;

  constructor(
    private cartService : CartService,
    private router : Router
  ) {
    this.formModel = new FormModel('','','','');
    this.giftCard = new GiftCard('');
    this.transfer = new Transfer('','');
   }
  
  ngOnInit() {
    this.cartService.products
    .pipe(map( products => {
        return products.reduce((prev , curr) => prev + curr.price, 0)
    }))
    .subscribe(val => {
      this.total = val;
    });

  }

  pay(form:any){
    function showConfirm(){
      const confirmUser = confirm('Do you want to make the payment?');
        if(confirmUser){
          alert('Successful payment')
        }else{
          alert('Denied payment')
        }
    };
    showConfirm();
    form.reset();
    window.location.reload();
    this.router.navigate(['/inicio']);
    
  }

  hidden(){
    if(this.total == 0){
      this.displayGiftCard
    }else{
      this.displayPayment = !this.displayPayment
    }
    
  }





}
