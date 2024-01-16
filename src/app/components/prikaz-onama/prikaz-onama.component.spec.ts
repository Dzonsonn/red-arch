import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazOnamaComponent } from './prikaz-onama.component';

describe('PrikazOnamaComponent', () => {
  let component: PrikazOnamaComponent;
  let fixture: ComponentFixture<PrikazOnamaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrikazOnamaComponent]
    });
    fixture = TestBed.createComponent(PrikazOnamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
