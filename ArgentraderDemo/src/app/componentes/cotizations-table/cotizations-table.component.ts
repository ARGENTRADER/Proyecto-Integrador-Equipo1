/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { CotizacionesServiceService } from 'app/services/cotizaciones-service.service';

@Component({
  selector: 'app-cotizations-table',
  templateUrl: './cotizations-table.component.html',
  styleUrls: ['./cotizations-table.component.css']
})

// interface CotizationsData {
//   titulos: any[]; // Ajusta el tipo adecuado para 'titulos'
// }

export class CotizationsTableComponent implements OnInit {
  
  constructor(private cotizacionesService:CotizacionesServiceService){}
  cotizationsData:any;
  ngOnInit(): void{
  }
  refrescar_cotizaciones(){
  //this.cotizacionesService.getCotizaciones().subscribe(cotizationsData =>{console.log(cotizationsData)});
  this.cotizacionesService.getCotizaciones().subscribe(cotizationsData => {this.cotizationsData = cotizationsData["titulos"]});
  console.log(this.cotizationsData);
  }

}
