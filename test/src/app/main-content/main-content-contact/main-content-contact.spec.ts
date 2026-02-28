import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentContact } from './main-content-contact';

describe('MainContentContact', () => {
  let component: MainContentContact;
  let fixture: ComponentFixture<MainContentContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
