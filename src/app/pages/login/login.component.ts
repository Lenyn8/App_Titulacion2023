import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/services/authentication.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  credenciales={

    correo: null,
    password:null
  }

  constructor(   private  authenticationService: AuthenticationService,
    private router:Router) { 
 
console.log("estoy en login");


  }

  ngOnInit() {}

  openMenu() {
    console.log('estoy en open menu');
  }
  async login() {
    const respuesta =  await this.authenticationService.login(this.credenciales.correo,this.credenciales.password).catch(error=>{
      console.log('Erorr en la clave');
      
    });
    if (respuesta) {
      console.log('esta es la respuesta ->', respuesta);
      this.router.navigate(['/invitado'])
   }
   
 }
}
