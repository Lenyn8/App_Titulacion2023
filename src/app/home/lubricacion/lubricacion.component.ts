import { Component, OnInit } from '@angular/core';
import { RealtimedbService } from 'src/app/services/realtimedb.service';
import { TimerService } from 'src/app/services/timer.service';
import * as moment from 'moment'; 
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-lubricacion',
  templateUrl: './lubricacion.component.html',
  styleUrls: ['./lubricacion.component.scss'],
})
export class LubricacionComponent implements OnInit {
  seccion: 'temp' | 'contr' | 'hist' = 'temp';

  mediciones: Mediciones[] = [];

  lastMedicion: Mediciones = {
    sensor: null,
    time: null,
  };
  umbral: number = 25;
  ventilador_state: boolean = null; 
  ventilador: number = 0;


  tiempoMax =   900;
  tiempoMaquina = 0;
  version = 0;

  manual: boolean = false;
  
  tiempo={
    minutos:0,
    segundos:0,
  }
  constructor(
    public timerService:TimerService,
    private realtimedb: RealtimedbService,
    public database: AngularFireDatabase

  ) { 
    this.leerMediciones();
    this.clearVersion();
    this.leerStateVentilador();
    this.setManual(); 



    setTimeout(()=>{
      this.tiempo=this.timerService.tiempo;
     },1000)
  }

  ngOnInit() {

      let today = new Date();
      console.log(today.toISOString());
      this.getmediciones() 
      
  }

  leerMediciones() {
      
    const path = 'mediciones/';
    this.database.list<Mediciones>(path, ref => ref.orderByChild('time').limitToLast(20)).valueChanges().subscribe( res => {
        console.log('mediciones -> ', res);
        this.mediciones = res;
        this.mediciones.reverse();
        this.lastMedicion = this.mediciones[0];
    })
}

clearVersion() {
  const path = 'version';
  this.database.object(path).set(0);
}

leerStateVentilador() {
  const path = 'ventilador_state';
  this.database.object<boolean>(path).valueChanges().subscribe( res => {
      if (res !== undefined) {
            this.ventilador_state = res;
      }
  });
}


setManual() {
  const path = 'ventilador';
  this.database.object<number>(path).valueChanges().subscribe( res => {
        console.log('setManual() -> ', res);
        if (res > 0) {
           this.manual = true;
        } else {
           this.manual = false;
        }
  });
}


  segmentChanged(ev: any) {
    this.seccion = ev.detail.value;
    // console.log('ev.detail.value -> ', ev.detail.value);
  }

  toogleChange(ev: any) {
    console.log('ev ->  ', ev.detail.checked);
    this.manual = ev.detail.checked;
    if (!this.manual) {
      const path = 'ventilador';
      this.database.object(path).set(0);
      this.version = this.version + 1;
      this.database.object('version').set(this.version);
    }
  }

  toogleChangePrender(ev: any) {
    const path = 'ventilador';
    if (ev.detail.checked) {
      this.database.object(path).set(2);
    } else {
      this.database.object(path).set(1);
    }
    this.version = this.version + 1;
    this.database.object('version').set(this.version);
  
  }

  rangeChange(ev: any) {
    this.umbral = ev.detail.value;
    // console.log('ev.detail.value -> ', ev.detail.value);
    const path = 'umbral';
    this.database.object(path).set(this.umbral);
    this.version = this.version + 1;
    this.database.object('version').set(this.version);
  }

  getmediciones() {
    const path = 'mediciones';
    this.realtimedb.getCollection(path).subscribe( (data: any) => {
        let tiempoTotal = 0;
        data.forEach( (medicion) => {
              medicion.time = new Date(medicion.time);
        })
        data.sort( (a, b) => {
          return a.time - b.time
        });
        console.log(data);
        for (let index = 0; index < data.length; index = index + 2) {
          var encendido = moment(data[index].time);
          var apagado = moment(data[index + 1].time);
          console.log(apagado.diff(encendido, 'minutes')) // 745   
          tiempoTotal = tiempoTotal + apagado.diff(encendido, 'minutes')  
        }
        console.log(' tiempoTotal ',  tiempoTotal) // 745  
          this.tiempoMaquina = tiempoTotal;
          this.tiempo.minutos = this.tiempoMaquina;
   
        
    })
  }

}
interface Mediciones {
  sensor: number;
  time: number;
}




