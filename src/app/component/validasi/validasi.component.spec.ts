import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidasiComponent } from './validasi.component';

describe('ValidasiComponent', () => {
  let component: ValidasiComponent;
  let fixture: ComponentFixture<ValidasiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidasiComponent]
    });
    fixture = TestBed.createComponent(ValidasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
