import { Component, OnInit } from '@angular/core';
import { Modelos } from '../../Model/modelo';
import { ModelosService } from '../Service/modelos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  providers: [ModelosService]
})
export class ContactoComponent implements OnInit{
  
   
    constructor(
      private _modelosService : ModelosService
    ){

    }
    ngOnInit(): void {
     
    }

    onClick(){
      console.log('Hiciste Click');
      window.location.reload();
    }
    
}
