import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosbarralatComponent } from './recursosbarralat.component';

describe('RecursosbarralatComponent', () => {
  let component: RecursosbarralatComponent;
  let fixture: ComponentFixture<RecursosbarralatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursosbarralatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosbarralatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
