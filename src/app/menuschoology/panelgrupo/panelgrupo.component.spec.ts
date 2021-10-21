import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelgrupoComponent } from './panelgrupo.component';

describe('PanelgrupoComponent', () => {
  let component: PanelgrupoComponent;
  let fixture: ComponentFixture<PanelgrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelgrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
