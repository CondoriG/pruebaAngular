import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosCursosComponent } from './nuevos-cursos.component';

describe('NuevosCursosComponent', () => {
  let component: NuevosCursosComponent;
  let fixture: ComponentFixture<NuevosCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevosCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevosCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
