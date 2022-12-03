
export interface  MaquinaI{
  
        marca: string,
        modelo: string,
        seccion: string,
        codigo: string,
    
      
}


export interface UserInfoI {
    correo:string;
    password:string;
    nombre:string;
    telefono:string;
    uid:string;
    perfil:'visitante'|'admin'
}

export interface ResponseApiSumaI {
    respuesta: number,
    numeroMayor: number,
    numeroMenor: number,
    estado: string;

}

export interface RequestApiSumaI {
    numero1: number;
    numero2: number;
} 

export interface Mediciones {
    sensor: number;
    time: number;
  }