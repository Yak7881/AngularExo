import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { ClientsRoutingmodule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormClientComponent } from './component/form-client/form-client.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PageListClientComponent,
    PageAddClientComponent,
    PageEditClientComponent,
    FormClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingmodule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ClientsModule { }
