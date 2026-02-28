import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentExperience } from './main-content-experience';

describe('MainContentExperience', () => {
  let component: MainContentExperience;
  let fixture: ComponentFixture<MainContentExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentExperience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentExperience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
