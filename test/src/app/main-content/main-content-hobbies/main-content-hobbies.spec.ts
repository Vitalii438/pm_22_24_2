import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentHobbies } from './main-content-hobbies';

describe('MainContentHobbies', () => {
  let component: MainContentHobbies;
  let fixture: ComponentFixture<MainContentHobbies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentHobbies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentHobbies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
