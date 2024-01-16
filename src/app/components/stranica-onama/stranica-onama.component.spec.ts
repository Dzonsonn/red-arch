import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StranicaOnamaComponent } from './stranica-onama.component';

describe('StranicaOnamaComponent', () => {
  let component: StranicaOnamaComponent;
  let fixture: ComponentFixture<StranicaOnamaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StranicaOnamaComponent]
    });
    fixture = TestBed.createComponent(StranicaOnamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
