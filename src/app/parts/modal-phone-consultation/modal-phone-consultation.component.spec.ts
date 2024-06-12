import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPhoneConsultationComponent } from './modal-phone-consultation.component';

describe('ModalPhoneConsultationComponent', () => {
  let component: ModalPhoneConsultationComponent;
  let fixture: ComponentFixture<ModalPhoneConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPhoneConsultationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPhoneConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
