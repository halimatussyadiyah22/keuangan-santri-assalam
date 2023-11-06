import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulirPengeluaranComponent } from './formulir-pengeluaran.component';

describe('FormulirPengeluaranComponent', () => {
  let component: FormulirPengeluaranComponent;
  let fixture: ComponentFixture<FormulirPengeluaranComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulirPengeluaranComponent]
    });
    fixture = TestBed.createComponent(FormulirPengeluaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
