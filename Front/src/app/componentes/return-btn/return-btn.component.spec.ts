import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnBtnComponent } from './return-btn.component';

describe('ReturnBtnComponent', () => {
  let component: ReturnBtnComponent;
  let fixture: ComponentFixture<ReturnBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnBtnComponent]
    });
    fixture = TestBed.createComponent(ReturnBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
