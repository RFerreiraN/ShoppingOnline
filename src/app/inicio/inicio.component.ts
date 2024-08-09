import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{
  
    constructor(
      private _router : Router,
    ){
      
    }

    ngOnInit(): void {
      
    }

    redirigir(){
      this._router.navigate(['/productos']);
      console.log('Presionado')
    }

  
    
  
}


 

  