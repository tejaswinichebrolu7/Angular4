import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVegmenuComponent } from './non-vegmenu.component';

describe('NonVegmenuComponent', () => {
  let component: NonVegmenuComponent;
  let fixture: ComponentFixture<NonVegmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonVegmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonVegmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
