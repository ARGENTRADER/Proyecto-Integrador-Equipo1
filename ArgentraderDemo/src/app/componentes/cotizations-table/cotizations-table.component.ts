/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CotizacionesServiceService } from 'app/services/cotizaciones-service.service';

@Component({
  selector: 'app-cotizations-table',
  templateUrl: './cotizations-table.component.html',
  styleUrls: ['./cotizations-table.component.css']
})
export class CotizationsTableComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cotizationsData:any;
  constructor(private cotizacionesService:CotizacionesServiceService){}
  

  ngOnInit(): void{
  }
  refrescar_cotizaciones(){
    this.cotizacionesService.getCotizaciones().subscribe(cotizationsData =>{this.cotizationsData = cotizationsData});
    console.log(this.cotizationsData);
  }

}
