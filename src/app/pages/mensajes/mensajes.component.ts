import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
// mensajes: any[]=[];
mensajes:any;
  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    
    this.mensajes=this.datosService.getMensajes()
  //   .subscribe((datos:any) =>{
  //   console.log(datos);
  //   this.mensajes=datos;
  // });
  }
}
