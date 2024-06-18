import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymSectionComponent } from './gym-section.component';

describe('GymSectionComponent', () => {
  let component: GymSectionComponent;
  let fixture: ComponentFixture<GymSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GymSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
