import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentSkills } from './main-content-skills';

describe('MainContentSkills', () => {
  let component: MainContentSkills;
  let fixture: ComponentFixture<MainContentSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
