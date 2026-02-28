import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAbout } from './header-about';

describe('HeaderAbout', () => {
  let component: HeaderAbout;
  let fixture: ComponentFixture<HeaderAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
