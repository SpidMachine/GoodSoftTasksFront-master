import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCoachPhoneConsComponent } from './modal-coach-phone-cons.component';

describe('ModalCoachPhoneConsComponent', () => {
  let component: ModalCoachPhoneConsComponent;
  let fixture: ComponentFixture<ModalCoachPhoneConsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCoachPhoneConsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCoachPhoneConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
