import { Component, OnInit } from '@angular/core';

import { UserInfoI } from 'src/app/models';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.component.html',
  styleUrls: ['./invitado.component.scss'],
})
export class InvitadoComponent implements OnInit {

  login:boolean = false;
  rol:'visitante'|'admin'=null;
  constructor(private authenticationService:AuthenticationService,
    private firestore:FirestoreService) {
      this.authenticationService.authstate().subscribe( respuesta => {
        if(respuesta){
          
          this.login=true;
          this.getDatosUser(respuesta.uid)
        }else{
         
          this.login=false;
          
        }
      });
     }

  ngOnInit() {}

  getDatosUser(uid:string){
    const path='Usuarios';
    const id= uid;
    this.firestore.getDocumentId<UserInfoI>(path,uid).subscribe(respuesta=>{
      console.log('datos->',respuesta)
      if(respuesta){
        this.rol=respuesta.perfil
      }
    })
  }
}
