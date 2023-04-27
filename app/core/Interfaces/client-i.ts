import { StateClient } from "../enums/state-client";

export interface ClientI {
  state: StateClient;
  tva: number ;
  id: number;
  name: string;
  totalCaHt: number;
  comment: string;
}
