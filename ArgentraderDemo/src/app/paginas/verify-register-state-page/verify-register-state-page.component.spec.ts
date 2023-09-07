import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyRegisterStatePageComponent } from './verify-register-state-page.component';

describe('VerifyRegisterStatePageComponent', () => {
  let component: VerifyRegisterStatePageComponent;
  let fixture: ComponentFixture<VerifyRegisterStatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyRegisterStatePageComponent]
    });
    fixture = TestBed.createComponent(VerifyRegisterStatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
