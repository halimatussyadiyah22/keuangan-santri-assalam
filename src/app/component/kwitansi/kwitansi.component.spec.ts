import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KwitansiComponent } from './kwitansi.component';

describe('KwitansiComponent', () => {
  let component: KwitansiComponent;
  let fixture: ComponentFixture<KwitansiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KwitansiComponent]
    });
    fixture = TestBed.createComponent(KwitansiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
