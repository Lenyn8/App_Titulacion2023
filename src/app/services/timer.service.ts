import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {


  tiempo={
    minutos:0,
    segundos:0,
  }

  inittime= new Date();

  
  constructor() {
    this.setTimer();
   }
   
   setTimer(){
     
         this.tiempo.segundos ++;
         if(this.tiempo.segundos===60){
           this.tiempo.segundos=0;
           this.tiempo.minutos ++;
         }
         if(this.tiempo.minutos===60){
           this.tiempo.minutos=0;
           this.tiempo.segundos=0;
         }
     
         //funcion que se ejecuta despues de un tiempo
         setTimeout(()=>{
          this.setTimer()
         },1000)
       
       }
}
