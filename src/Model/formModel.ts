export class FormModel {

   constructor(
   public card : string,
   public month : string,
   public year: string,
   public secCode : string

   
   ){

   }

};

export class GiftCard {
   constructor (
      public giftCode : string,
   ) {

   }
};

export class Transfer {
   constructor(
      public sourceAccount : string,
      public destinationAccount : string,
   ){

   }
};