import { Component, OnInit } from '@angular/core';
import { RealtimedbService } from '../services/realtimedb.service';

@Component({
  selector: 'app-arduino',
  templateUrl: './arduino.component.html',
  styleUrls: ['./arduino.component.scss'],
})
export class ArduinoComponent implements OnInit {

  estadoLed: boolean = false

  version = 0;

  constructor(private realtimedbService: RealtimedbService,) {this.getStateLED(); }

  ngOnInit() { }

    async guardarLed(){
      let path = 'led';
      await this.realtimedbService.createObject(path, true);
      this.version = this.version + 1;
      path = 'version'
      this.realtimedbService.createObject(path, this.version);
  
    }
  
    async apagarLed(){
      let path = 'led';
      await this.realtimedbService.createObject(path, false);
      this.version = this.version + 1;
      path = 'version'
      this.realtimedbService.createObject(path, this.version);
      
    }
  
    getStateLED(){
      const path = 'state-led';
      this.realtimedbService.getObject(path).subscribe( res => {
        
        this.estadoLed = res as any;
        console.log("this.estadoLed", this.estadoLed);
      })
      
    }

  }


