import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegmenuComponent } from './vegmenu.component';

describe('VegmenuComponent', () => {
  let component: VegmenuComponent;
  let fixture: ComponentFixture<VegmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
