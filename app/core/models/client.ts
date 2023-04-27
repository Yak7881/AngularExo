import { ClientI } from "../Interfaces/client-i";
import { StateClient } from "../enums/state-client";

export class Client implements ClientI {
  state = StateClient.INACTIVE;
  tva = 20 ;
  id!: number;
  name!: string;
  totalCaHt!: number ;
  comment!: string;


  constructor(obj?: Partial<Client>){
    if(obj){
      // Si obj existe, alors on crée un objet
      // méthode JS
      Object.assign(this, obj)
    }

  }
}

