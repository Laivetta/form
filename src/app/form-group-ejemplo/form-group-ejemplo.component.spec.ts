import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupEjemploComponent } from './form-group-ejemplo.component';

describe('FormGroupEjemploComponent', () => {
  let component: FormGroupEjemploComponent;
  let fixture: ComponentFixture<FormGroupEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupEjemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
