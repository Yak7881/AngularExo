import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';

const router: Routes = [
  {path:'add', component : PageAddClientComponent},
  {path:'', component : PageListClientComponent},
  {path:'edit', component : PageEditClientComponent},
];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class ClientsRoutingmodule {}
