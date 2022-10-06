import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

rutas=[
  {name:'Inicio',
  path:'/inicio',
},
{name:'Nosotros',
path:'/nosotros',},

{name:'Contacto',
path:'/contacto',},

{name:'Mensajes',
path:'/mensajes',},

{name:'Ofertas',
path:'/ofertas',},

];

  constructor() { }

  ngOnInit(): void {
  }

}
