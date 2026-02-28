import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLanguagesTop } from './footer-languages-top';

describe('FooterLanguagesTop', () => {
  let component: FooterLanguagesTop;
  let fixture: ComponentFixture<FooterLanguagesTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLanguagesTop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLanguagesTop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
