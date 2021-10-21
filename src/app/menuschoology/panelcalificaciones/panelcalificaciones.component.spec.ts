import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelcalificacionesComponent } from './panelcalificaciones.component';

describe('PanelcalificacionesComponent', () => {
  let component: PanelcalificacionesComponent;
  let fixture: ComponentFixture<PanelcalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelcalificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelcalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
