import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLadingPageComponent } from './body-lading-page.component';

describe('BodyLadingPageComponent', () => {
  let component: BodyLadingPageComponent;
  let fixture: ComponentFixture<BodyLadingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyLadingPageComponent]
    });
    fixture = TestBed.createComponent(BodyLadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
