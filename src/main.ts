import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { IonicModule } from '@ionic/angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//import { defineCustomElements} from '@ionic/pwa-elements/loader';

//background
import {defineCustomElements } from 'gl-ionic-background-video/dist/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

  defineCustomElements (window)