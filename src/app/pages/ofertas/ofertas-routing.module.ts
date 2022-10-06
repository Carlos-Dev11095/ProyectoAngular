import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasComponent } from './ofertas.component';

const routes: Routes = [
  {path: '', component:OfertasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertasRoutingModule { }
