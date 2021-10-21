import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelrecursosComponent } from './panelrecursos.component';

describe('PanelrecursosComponent', () => {
  let component: PanelrecursosComponent;
  let fixture: ComponentFixture<PanelrecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelrecursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelrecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
