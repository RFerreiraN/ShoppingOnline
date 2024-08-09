import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PersonalInformation } from '../../Model/personal-information';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
export class SessionComponent implements OnInit{

  public session : boolean; 
  public personalInformation : PersonalInformation;

    constructor(
      private _router : Router,
    ){
      this.session = false;
      this.personalInformation = new PersonalInformation('','','','','','','','','',)
    }

    ngOnInit(): void {
      
    }

    logout(){
      this._router.navigate(['/area-personal']);
    }
}
