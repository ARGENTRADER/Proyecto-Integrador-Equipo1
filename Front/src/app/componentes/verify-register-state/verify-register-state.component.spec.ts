import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyRegisterStateComponent } from './verify-register-state.component';

describe('VerifyRegisterStateComponent', () => {
  let component: VerifyRegisterStateComponent;
  let fixture: ComponentFixture<VerifyRegisterStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyRegisterStateComponent]
    });
    fixture = TestBed.createComponent(VerifyRegisterStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
