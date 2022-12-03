import * as functions from "firebase-functions";

const cors = require('cors')({
    origin: true
});


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
 export const helloWorld = functions.https.onRequest((request, response) => {
  
return cors(request, response,async()=>{

    console.log('anular_payment_datafast');
    response.set('Acsses-control-Allow-Origen','*');
    response.set('Acsses-control-Allow-Methods','GET,PUT.OPTIONS'); 
    response.set('Acsses-control-Allow-Headers','*');
    const data=request.body as RequestApi
    if (data.numero1 != undefined && data.numero2 != undefined) {
       const res: ResponseApi = {
           respuesta: data.numero1 + data.numero2,
           numeroMayor: data.numero1 <= data.numero2 ? data.numero2 : data.numero1,
           numeroMenor: data.numero1 < data.numero2 ? data.numero2 : data.numero1,
           estado: 'sucess'

       }
       response.send(res);
       
       }else {
       const res: ResponseApi = {
           respuesta:0,
           numeroMayor: 0,
           numeroMenor: 0,
           estado: 'error,falta info'

       }
       response.send (res);
   }
});

    
    });
    


    export const scheduleTest = functions.pubsub.schedule('every 1 minutes').onRun ( async (context) => {

   console.log ('notificacion '); 

});

interface RequestApi {
    numero1: number;
    numero2: number;

}
interface ResponseApi {
    respuesta: number,
    numeroMayor: number,
    numeroMenor: number,
    estado: string;

}
