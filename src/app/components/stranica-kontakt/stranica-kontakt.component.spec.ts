import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StranicaKontaktComponent } from './stranica-kontakt.component';

describe('StranicaKontaktComponent', () => {
  let component: StranicaKontaktComponent;
  let fixture: ComponentFixture<StranicaKontaktComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StranicaKontaktComponent]
    });
    fixture = TestBed.createComponent(StranicaKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
