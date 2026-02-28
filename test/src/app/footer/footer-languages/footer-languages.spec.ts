import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLanguages } from './footer-languages';

describe('FooterLanguages', () => {
  let component: FooterLanguages;
  let fixture: ComponentFixture<FooterLanguages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLanguages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLanguages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
