import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../../services/ofertas.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {
// ofertas: any[]=[];
ofertas:any;
  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas=this.ofertasService.getOfertas()
  
  }
}
