import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAwards } from './header-awards';

describe('HeaderAwards', () => {
  let component: HeaderAwards;
  let fixture: ComponentFixture<HeaderAwards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAwards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAwards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
