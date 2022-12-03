import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// background
import 'gl-ionic-background-video';


import { BienvenidaComponent } from './bienvenida.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: BienvenidaComponent
      }
    ])
  ],
  declarations: [BienvenidaComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BienvenidaComponentModule {}
