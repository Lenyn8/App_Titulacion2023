import { Component, OnInit, } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { MaquinaI } from 'src/app/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RequestApiSumaI,ResponseApiSumaI } from 'src/app/models';

@Component ({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  maquina: MaquinaI [] = [];
  marca: String = "HOMAG";
  modelo: String = "MODELO";
  addNuevo: boolean = false;
  loading: any;


  newMaquina: MaquinaI = {
    marca: "",
    modelo: "",
    seccion: "",
    codigo: "",

  }

  editarEnable: boolean = false;

  respuesta: ResponseApiSumaI;
  data: RequestApiSumaI = {
    numero1: null,
    numero2: null,
  }

  constructor ( private authenticationService: AuthenticationService,
           private http: HttpClient,
           public loadingController: LoadingController,
           public toastController: ToastController 
    ){
    //this.loadgetSuma();
    this.loadMaquina();


           }


  


  ngOnInit() { }

  loadMaquina() {
    this.maquina = [

      {
        marca: "HOMAG",
        modelo: "2010",
        seccion: "Tableros",
        codigo: "1234"

      },

      {
        marca: "BIESSE",
        modelo: "2010",
        seccion: "Tableros",
        codigo: "1234"

      },

      {
        marca: "scm",
        modelo: "2010",
        seccion: "Tableros",
        codigo: "1234"

      },

    ];

  }

  selectmarca() {
    this.marca = "homag";
  }
  selectmodelo() {
    this.modelo = "2010";
  }

  addNuevoEnable() {
    this.addNuevo = true;
  }


  guardar() {
    if (this.editarEnable == true) {
      this.addNuevo = false;
      this.resetForm();
    } else {
      console.log('Maquina agregada -> ', this.newMaquina);
      const nuevo: MaquinaI = {
        marca: this.newMaquina.marca,
        modelo: this.newMaquina.modelo,
        seccion: this.newMaquina.seccion,
        codigo: this.newMaquina.codigo
      };
      this.presentLoading();
      this.maquina.push(nuevo);
      this.addNuevo = false;
      this.resetForm();
    }
    this.presentLoading();
  }

  cancelar() {
    this.addNuevo = false;
    this.resetForm()
  }

  resetForm() {
    this.newMaquina = {
      marca: 'homag',
      modelo: '',
      seccion: "",
      codigo: ""
    }
  }

  editar(maquina: MaquinaI) {
    console.log('Maquina editado -> ', maquina);
    this.editarEnable = true;
    this.addNuevo = true;
    this.newMaquina = maquina
  }

  eliminar(i: number) {
    this.maquina.splice(i);
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Guardando...',
      duration: 2000
    });
    await this.loading.present();
    await this.loading.onDidDismiss();
    console.log('Guardado con exito');
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  getSuma(){
      const url = 'http://localhost:5001/apmi-asistent/us-central1/helloWorld';
      const httpOptions = {
       headers: new HttpHeaders({'Content-Type': 'application/json',
       })
      };
      
     return this.http.post<ResponseApiSumaI>(url,this.data, httpOptions).subscribe ( res => {
      console.log('recibo respuesta del servidor =>', res);
      this.respuesta = res;
      return;
     })
  }  
    




  getsumaCliente() {
    const data = this.data;
      
    this.respuesta= {
            respuesta: data.numero1 + data.numero2,
            numeroMayor: data.numero1 <= data.numero2 ? data.numero2 : data.numero1,
            numeroMenor: data.numero1 < data.numero2 ? data.numero2 : data.numero1,
            estado: 'sucess'
        }



   }

  }

  
  




