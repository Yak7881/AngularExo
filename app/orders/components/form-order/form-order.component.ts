import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent {
  public form!: FormGroup;

  // convertir l'enum d'un tableau
  public stateOrder = Object.values(StateOrder);

  public newObj: Order = new Order();

  constructor(private fb : FormBuilder , private ordersService: OrdersService, private router: Router){}

  public onSubmit(){
    console.log(this.form.value);
    // méthode : POST
    // envoyer this.fom.value dans la bdd avec la méthode POST
    this.ordersService.add(this.form.value).subscribe((data)=>{
      console.log(data);
      // redirection vers la page liste orders
      this.router.navigate(['']);

    })

  }

    // décrrire le contenue du form
    // dans lun objet, on va créer des propriétés pour chaque onput, on donne des valeurs par défaut

  ngOnInit() {
    this.form = this.fb.group({
      tjmHt: [this.newObj.tjmHt],
      nbJours:[this.newObj.nbJours],
      tva:[this.newObj.tva],
      state:[this.newObj.state],
      typePresta:[this.newObj.typePresta],
      client:[this.newObj.client],
      comment:[this.newObj.comment],
      id:[this.newObj.id],
    });
  }




  // au clci sur le bouton, la méthode onSubmit() est déclanchée
  // NE RIEN ECRIRE EN DEHORS DE CES ACCOLADES

}


