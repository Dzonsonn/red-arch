import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StranicaPortfolioComponent } from './stranica-portfolio.component';

describe('StranicaPortfolioComponent', () => {
  let component: StranicaPortfolioComponent;
  let fixture: ComponentFixture<StranicaPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StranicaPortfolioComponent]
    });
    fixture = TestBed.createComponent(StranicaPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
