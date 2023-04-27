import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './orders/pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './orders/pages/page-edit-order/page-edit-order.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';
import { PageAddClientComponent } from './clients/pages/page-add-client/page-add-client.component';
import { PageListClientComponent } from './clients/pages/page-list-client/page-list-client.component';
import { PageEditClientComponent } from './clients/pages/page-edit-client/page-edit-client.component';


// ici on va définir des routes
// tableau de root
// chaque route est un objet
const routes: Routes = [
  {path:'',component: PageListOrdersComponent },
  {path:'add',component: PageAddOrderComponent },
  {path:'edit',component: PageEditOrderComponent },
 
  // Charge le module pagenotfound que si l'uitilisateur
  // emprunte une route qui n'existe pas
  // créer module > component > pagenotefound
  // lazy loading = one ne charge le module que si besoin

  // Lazy loading sur le module clients
  // tester dans le navigateur

  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then((m) => m.ClientsModule)
  },

  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // Afficher le tableau complet des routes
  // Afficher  / utiliser une fonctionnalité Router
  constructor(private router : Router){
    console.log(this.router.config, 'tableau de routes')
  }
}
