import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnamaSectionComponent } from './onama-section.component';

describe('OnamaSectionComponent', () => {
  let component: OnamaSectionComponent;
  let fixture: ComponentFixture<OnamaSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnamaSectionComponent]
    });
    fixture = TestBed.createComponent(OnamaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
