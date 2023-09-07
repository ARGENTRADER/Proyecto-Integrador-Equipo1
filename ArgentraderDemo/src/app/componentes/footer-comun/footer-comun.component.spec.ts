import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComunComponent } from './footer-comun.component';

describe('FooterComunComponent', () => {
  let component: FooterComunComponent;
  let fixture: ComponentFixture<FooterComunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComunComponent]
    });
    fixture = TestBed.createComponent(FooterComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
