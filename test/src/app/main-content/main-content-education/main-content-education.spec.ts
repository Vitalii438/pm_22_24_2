import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentEducation } from './main-content-education';

describe('MainContentEducation', () => {
  let component: MainContentEducation;
  let fixture: ComponentFixture<MainContentEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentEducation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentEducation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
