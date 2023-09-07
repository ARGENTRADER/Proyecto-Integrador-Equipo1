import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNewPassComponent } from './get-new-pass.component';

describe('GetNewPassComponent', () => {
  let component: GetNewPassComponent;
  let fixture: ComponentFixture<GetNewPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetNewPassComponent]
    });
    fixture = TestBed.createComponent(GetNewPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
