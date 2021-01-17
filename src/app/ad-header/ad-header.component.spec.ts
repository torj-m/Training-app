import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdHeaderComponent } from './ad-header.component';

describe('AdHeaderComponent', () => {
  let component: AdHeaderComponent;
  let fixture: ComponentFixture<AdHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
