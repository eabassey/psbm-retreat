import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendConfirmComponent } from './send-confirm.component';

describe('SendConfirmComponent', () => {
  let component: SendConfirmComponent;
  let fixture: ComponentFixture<SendConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
