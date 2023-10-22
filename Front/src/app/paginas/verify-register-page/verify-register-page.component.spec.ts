import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyRegisterPageComponent } from './verify-register-page.component';

describe('VerifyRegisterPageComponent', () => {
  let component: VerifyRegisterPageComponent;
  let fixture: ComponentFixture<VerifyRegisterPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyRegisterPageComponent]
    });
    fixture = TestBed.createComponent(VerifyRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
