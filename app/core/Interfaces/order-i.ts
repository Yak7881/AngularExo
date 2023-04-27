import { StateOrder } from "../enums/state-order";

export interface OrderI {
  // Objectif : lister toutes les propriétés de l'objet Order
  // Et on va fixer des types pour chacune des propriètés
  tjmHt: number;
  nbJours: number;
  tva: number;
  state: StateOrder;
  typePresta: string;
  client: string;
  comment: string;
  id: number;
}

// Créer un model qui respect les régles fixées dans l'enum et interface
