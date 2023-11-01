import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassStateComponent } from './reset-pass-state.component';

describe('ResetPassStateComponent', () => {
  let component: ResetPassStateComponent;
  let fixture: ComponentFixture<ResetPassStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPassStateComponent]
    });
    fixture = TestBed.createComponent(ResetPassStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
