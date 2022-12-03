import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EletronicoComponent } from './home/eletronico/eletronico.component';
import { HidraulicoComponent } from './home/hidraulico/hidraulico.component';
import { LubricacionComponent } from './home/lubricacion/lubricacion.component';
import { MantenimientosComponent } from './home/mantenimientos/mantenimientos.component';
import { NeumaticoComponent } from './home/neumatico/neumatico.component';
import { MecanicoComponent } from './home/mecanico/mecanico.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { CronogramaComponent } from './pages/cronograma/cronograma.component';
import { HomeComponent } from './pages/home/home.component';
import { InvitadoComponent } from './pages/invitado/invitado.component';
import { LoginComponent } from './pages/login/login.component';
import { NotasComponent } from './pages/notas/notas.component';
import { OpcionesComponent } from './pages/opciones/opciones.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ProgresoComponent } from './pages/progreso/progreso.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { SoftwareComponent } from './home/software/software.component';
import { ArduinoComponent } from './arduino/arduino.component';
import { ListadoinvitadoComponent } from './listadoinvitado/listadoinvitado.component';
import { TecnicosComponent } from './tecnicos/tecnicos.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


//background



const routes: Routes = [
  
  
  {path:'actividades', component: ActividadesComponent},
  {path:'notas',component:NotasComponent},
  {path:'progreso', component: ProgresoComponent},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'opciones',component: OpcionesComponent},
  {path:'cronograma',component: CronogramaComponent},
  {path:'registrarse',component: RegistrarseComponent},
  {path:'mantenimientos',component: MantenimientosComponent},
  {path:'lubricacion',component: LubricacionComponent},
  {path:'invitado',component: InvitadoComponent},
  {path:'electronico',component: EletronicoComponent},
  {path:'hidraulico',component: HidraulicoComponent},
  {path:'neumatico',component: NeumaticoComponent},
  {path:'mecanico',component: MecanicoComponent},
  {path:'software',component: SoftwareComponent},
  {path:'arduino',component: ArduinoComponent},
  {path:'listadoinvitado',component:ListadoinvitadoComponent},
  {path:'tecnicos',component: TecnicosComponent},
  {path:'principal',component: PrincipalComponent},
  { path:'',component: BienvenidaComponent},
  

];
  
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,
  
    
    })
  
  
  
  
  
  
  
  
  ],
  exports: [RouterModule],
  



})
export class AppRoutingModule { }
