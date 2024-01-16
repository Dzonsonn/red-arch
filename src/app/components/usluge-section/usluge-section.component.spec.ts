import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UslugeSectionComponent } from './usluge-section.component';

describe('UslugeSectionComponent', () => {
  let component: UslugeSectionComponent;
  let fixture: ComponentFixture<UslugeSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UslugeSectionComponent]
    });
    fixture = TestBed.createComponent(UslugeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
