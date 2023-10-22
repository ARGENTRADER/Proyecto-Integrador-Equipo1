import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseResultComponent } from './choose-result.component';

describe('ChooseResultComponent', () => {
  let component: ChooseResultComponent;
  let fixture: ComponentFixture<ChooseResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseResultComponent]
    });
    fixture = TestBed.createComponent(ChooseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
