import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCardComponent } from './cursos-card.component';

describe('CursosCardComponent', () => {
  let component: CursosCardComponent;
  let fixture: ComponentFixture<CursosCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
