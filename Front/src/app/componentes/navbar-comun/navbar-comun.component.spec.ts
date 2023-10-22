import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComunComponent } from './navbar-comun.component';

describe('NavbarComunComponent', () => {
  let component: NavbarComunComponent;
  let fixture: ComponentFixture<NavbarComunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComunComponent]
    });
    fixture = TestBed.createComponent(NavbarComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
