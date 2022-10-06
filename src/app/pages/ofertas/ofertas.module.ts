import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertasRoutingModule } from './ofertas-routing.module';
import { OfertasComponent } from './ofertas.component';


@NgModule({
  declarations: [
    OfertasComponent
  ],
  imports: [
    CommonModule,
    OfertasRoutingModule
  ]
})
export class OfertasModule { }
