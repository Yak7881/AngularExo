import { Component } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent {

  public title: string ='Page List Client';

  public tab: Client[]   | undefined;

  public headers : string [] = [
    'Action',
    'Etat',
    'tva',
    'name',
    'Total CA HT',
    'Comment',
  ];


  // constructor + injecter le service Clients
  constructor(private clientsService: ClientService) {
    // ???? déclencher getDatas()
    this.clientsService.getDatas().subscribe((data) => {
      console.log(data);
      this.tab = data
    });
  }
}
