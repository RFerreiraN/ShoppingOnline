import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalInformation } from '../../Model/personal-information';
import { Register } from '../../Model/registerForm';


@Component({
  selector: 'app-area-personal',
  templateUrl: './area-personal.component.html',
  styleUrl: './area-personal.component.css'
})
export class AreaPersonalComponent implements OnInit{

 public passwordFieldType: string = 'password';
 public password: string = '';
 public session : boolean;
 public personalInformation : PersonalInformation;
 public isReadOnly : boolean;
 public registerUser : Register;
 public logInUser : any;


  constructor(
    private _router : Router,
  ){
    this.session = false;
    this.personalInformation = new PersonalInformation('','','','','','','','','',); 
    this.isReadOnly = true;
    this.registerUser = new Register('','','','')
    this.logInUser = {
      'name' : ""
    }
  }

  ngOnInit(): void {
    
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  
  togglePasswordVisibilityRegister() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  login(){
    this.session = true;
    
  }

  logout(){
    this.session = false;
  }

  edit(){
   this.isReadOnly = !this.isReadOnly
  }

 register(){
  console.log('Usuario registrado!!')
 }



}
