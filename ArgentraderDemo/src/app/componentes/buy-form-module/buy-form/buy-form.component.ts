/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.css']
})
export class BuyFormComponent implements OnInit {
  buyForm= this.formBuilder.group({
    cantidad: ['',[Validators.required, Validators.pattern('^[0-9]+$')]],
  });
  get cantidad() { return this.buyForm.controls.cantidad;}

  item:any;
  constructor(private route: ActivatedRoute, private formBuilder:FormBuilder){
}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.item = params.get('id');
      console.log(this.item);
  });
}


}
