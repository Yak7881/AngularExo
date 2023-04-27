import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from './icons/icons.module';
import { HttpClientModule } from '@angular/common/http';
import { OrdersModule } from './orders/orders.module';

// decorateur
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, CoreModule, IconsModule, HttpClientModule, OrdersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
