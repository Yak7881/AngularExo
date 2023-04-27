import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { TotalCahtPipe } from './pipes/totalcaht.pipe';



@NgModule({
  declarations: [
    TotalPipe,
    BtnComponent,
    TotalCahtPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    TotalPipe,
    BtnComponent,
    TotalCahtPipe
  ]
})
export class SharedModule { }
