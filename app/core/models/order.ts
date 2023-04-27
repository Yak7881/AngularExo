import { OrderI } from "../Interfaces/order-i";
import { StateOrder } from "../enums/state-order";

export class Order  implements OrderI{
  tjmHt  = 1200 ;
  nbJours = 1 ;
  tva = 20 ;
  state =  StateOrder.OPTION;
  typePresta!: string ;
  client!: string ;
  comment!: string ;
  id!: number;
  // lister des propriètés et donner des valeurs par défaut
  constructor(obj?: Partial<Order>){
    if(obj){
      // Si obj existe, alors on crée un objet
      // méthode JS
      Object.assign(this, obj)
    }

  }

}

// new Order({})

// Dans mon application, quand je vais créer un objet de type Order,
// On obtiendra des valeurs par défaut
