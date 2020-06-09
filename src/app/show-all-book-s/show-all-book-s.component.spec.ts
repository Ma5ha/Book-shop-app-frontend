import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllBookSComponent } from './show-all-book-s.component';

describe('ShowAllBookSComponent', () => {
  let component: ShowAllBookSComponent;
  let fixture: ComponentFixture<ShowAllBookSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllBookSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllBookSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
