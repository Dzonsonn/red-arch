import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StranicaUslugeComponent } from './stranica-usluge.component';

describe('StranicaUslugeComponent', () => {
  let component: StranicaUslugeComponent;
  let fixture: ComponentFixture<StranicaUslugeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StranicaUslugeComponent]
    });
    fixture = TestBed.createComponent(StranicaUslugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
