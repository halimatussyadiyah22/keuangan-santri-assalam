import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KwitansiCardComponent } from './kwitansi-card.component';

describe('KwitansiCardComponent', () => {
  let component: KwitansiCardComponent;
  let fixture: ComponentFixture<KwitansiCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KwitansiCardComponent]
    });
    fixture = TestBed.createComponent(KwitansiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
