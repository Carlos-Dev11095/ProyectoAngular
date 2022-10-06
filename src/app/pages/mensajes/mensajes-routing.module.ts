import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensajesComponent } from './mensajes.component';

const routes: Routes = [
  {path: '', component: MensajesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensajesRoutingModule { }
