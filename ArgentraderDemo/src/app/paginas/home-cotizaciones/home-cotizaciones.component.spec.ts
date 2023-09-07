import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCotizacionesComponent } from './home-cotizaciones.component';

describe('HomeCotizacionesComponent', () => {
  let component: HomeCotizacionesComponent;
  let fixture: ComponentFixture<HomeCotizacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCotizacionesComponent]
    });
    fixture = TestBed.createComponent(HomeCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
