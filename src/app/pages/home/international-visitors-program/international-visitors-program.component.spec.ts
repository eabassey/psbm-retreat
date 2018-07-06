import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalVisitorsProgramComponent } from './international-visitors-program.component';

describe('InternationalVisitorsProgramComponent', () => {
  let component: InternationalVisitorsProgramComponent;
  let fixture: ComponentFixture<InternationalVisitorsProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalVisitorsProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalVisitorsProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
