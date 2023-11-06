import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulirPemasukanComponent } from './formulir-pemasukan.component';

describe('FormulirPemasukanComponent', () => {
  let component: FormulirPemasukanComponent;
  let fixture: ComponentFixture<FormulirPemasukanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulirPemasukanComponent]
    });
    fixture = TestBed.createComponent(FormulirPemasukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
