import { Component, OnInit } from '@angular/core';
import { RealtimedbService } from 'src/app/services/realtimedb.service';
import { TimerService } from 'src/app/services/timer.service';
import * as moment from 'moment'; 


@Component({
  selector: 'app-mecanico',
  templateUrl: './mecanico.component.html',
  styleUrls: ['./mecanico.component.scss'],
})
export class MecanicoComponent implements OnInit {

  tiempoMax =   900;
  tiempoMaquina = 0;
  
  tiempo={
    minutos:0,
    segundos:0,
  }

  constructor(
    public timerService:TimerService,
    private realtimedb: RealtimedbService
  ) { 
    setTimeout(()=>{
      this.tiempo=this.timerService.tiempo;
     },1000)
  }

  ngOnInit() {
    let today = new Date();
    console.log(today.toISOString());
    this.getmediciones() 
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
