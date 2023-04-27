// Sous fichier de routing

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const router: Routes = [
  {path:'**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class PageNotFoundRoutingModule {}
