import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const rutas: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path: 'contacto', component:ContactoComponent},

  {path: 'mensajes',loadChildren:()=>import('./pages/mensajes/mensajes.module').then(m=>m.MensajesModule)},
  {path: 'ofertas',loadChildren:()=>import('./pages/ofertas/ofertas.module').then(m=>m.OfertasModule)},

  {path: '**', redirectTo: 'inicio'}

];
@NgModule({
 imports:[
  RouterModule.forRoot(rutas)
 ],
 exports:[
  RouterModule
]
})
export class AppRoutingModule { }
