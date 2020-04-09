import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesSecComponent } from './features-sec.component';

describe('FeaturesSecComponent', () => {
  let component: FeaturesSecComponent;
  let fixture: ComponentFixture<FeaturesSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
