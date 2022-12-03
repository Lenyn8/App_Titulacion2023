import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgresoComponent } from './pages/progreso/progreso.component'
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { NotasComponent } from './pages/notas/notas.component';
import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from './pages/principal/principal.component';
import { LoginComponent } from './pages/login/login.component';
import { OpcionesComponent } from './pages/opciones/opciones.component';
import { CronogramaComponent } from './pages/cronograma/cronograma.component';
import { InvitadoComponent } from './pages/invitado/invitado.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { MantenimientosComponent } from './home/mantenimientos/mantenimientos.component';
import { LubricacionComponent } from './home/lubricacion/lubricacion.component';
import { EletronicoComponent } from './home/eletronico/eletronico.component';
import { HidraulicoComponent } from './home/hidraulico/hidraulico.component';
import { NeumaticoComponent } from './home/neumatico/neumatico.component';
import { MecanicoComponent } from './home/mecanico/mecanico.component';
import { SoftwareComponent } from './home/software/software.component';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HttpClientModule } from '@angular/common/http';
import { ArduinoComponent } from './arduino/arduino.component';
import { ListadoinvitadoComponent } from './listadoinvitado/listadoinvitado.component';
import { TecnicosComponent } from './tecnicos/tecnicos.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProgresoComponent,
    ActividadesComponent,
    NotasComponent,
    PrincipalComponent,
    LoginComponent,
    OpcionesComponent,
    CronogramaComponent,
    InvitadoComponent,
    RegistrarseComponent,
    MantenimientosComponent,
    LubricacionComponent,
    EletronicoComponent,
    HidraulicoComponent,
    NeumaticoComponent,
    MecanicoComponent,
    SoftwareComponent,
    ArduinoComponent,
    ListadoinvitadoComponent,
    TecnicosComponent,
    BienvenidaComponent,
    
   
  ],
  entryComponents: [],
  imports: [
     
    BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     FormsModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFireAuthModule,
     AngularFirestoreModule,
     AngularFireDatabaseModule,
     HttpClientModule,
     AngularFireDatabaseModule 
     
    
    
    
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
