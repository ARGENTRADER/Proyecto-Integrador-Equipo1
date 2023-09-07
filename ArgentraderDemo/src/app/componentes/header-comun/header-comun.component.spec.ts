import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComunComponent } from './header-comun.component';

describe('HeaderComunComponent', () => {
  let component: HeaderComunComponent;
  let fixture: ComponentFixture<HeaderComunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComunComponent]
    });
    fixture = TestBed.createComponent(HeaderComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
