import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentReferences } from './main-content-references';

describe('MainContentReferences', () => {
  let component: MainContentReferences;
  let fixture: ComponentFixture<MainContentReferences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContentReferences]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentReferences);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
