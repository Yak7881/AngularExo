import { Component } from '@angular/core';
import { OrdersService } from '../../service/orders.service';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent {

  public title: string ='Page List Order';

  // créer un propriété disponible dans l'HTML

  public tab: Order[] | undefined;

  // créer un tableau de headers! string
  public headers : string [] = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  // Injecter le service orders
  constructor(private ordersServices: OrdersService){
    console.log(this.ordersServices.sumUp(1, 2))

    this.ordersServices.getDatas().subscribe(data => {
      this.tab = data;
      console.log(this.tab);
    });
    }

  // public total(val: number, coef: number, tva?:number): number{
  //   console.log('déclenché');

  //   if(tva) return val * coef * ( 1+ tva/100 )
  //   return val*coef;
    // 1200 * 3 * 1.20
  }

