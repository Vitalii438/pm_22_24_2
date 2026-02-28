import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPeople } from './header-people';

describe('HeaderPeople', () => {
  let component: HeaderPeople;
  let fixture: ComponentFixture<HeaderPeople>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPeople]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPeople);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
