import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneConsultationComponent } from './phone-consultation.component';

describe('PhoneConsultationComponent', () => {
  let component: PhoneConsultationComponent;
  let fixture: ComponentFixture<PhoneConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneConsultationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
