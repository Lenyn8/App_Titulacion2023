import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { UserInfoI } from 'src/app/models';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss'],
})
export class RegistrarseComponent implements OnInit {


  newUser: UserInfoI = {
    correo:null,
    password:null,
    nombre:null,
    telefono:null,
    uid:null,
    perfil:'visitante',
  };

  repassword: string= null;


  constructor(
    private authenticationService:AuthenticationService,
              private firestoreService: FirestoreService,
              private router:Router
  ) { }

  ngOnInit() {}

  async registrarse() {
    if (this.newUser.password != this.repassword) {
      console.log('passwords no coinciden');  
      return;
    }
    const res = await  this.authenticationService.registrarUser(this.newUser).catch(error=>{
      console.log('error');
      
    });
  console.log('User ->',this.newUser)
    console.log('res -> ',res);
    if (res) {
      
       const path = 'Usuarios';
       const id =  res.user.uid;
       this.newUser.uid = id;
       this.firestoreService.saveDoc(path, id,this.newUser)
       // guardar en la base de datos
       this.router.navigate(['invitado'])
    }
  
 }
}

