import { Component, OnInit } from '@angular/core';
import { FormModel } from '../../Model/formModel';
import { GiftCard } from '../../Model/formModel';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
  
})
export class PaymentComponent implements OnInit{

    public formModel : FormModel;
    public showDisplay: boolean = false;
    public gidfCard : GiftCard;
    public displayGiftCard : boolean = false;

  constructor() {
    this.formModel = new FormModel('','','','');
    this.gidfCard = new GiftCard('');
    
  }

  ngOnInit(): void {

  }

  pay(){

  }

  showPayment(){
    this.showDisplay = !this.showDisplay;
  }

  giftCardPayment(){
    this.displayGiftCard = !this.displayGiftCard
  }

  
}
