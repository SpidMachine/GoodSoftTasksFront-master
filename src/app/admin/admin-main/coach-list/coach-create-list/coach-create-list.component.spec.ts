import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachCreateListComponent } from './coach-create-list.component';

describe('CoachCreateListComponent', () => {
  let component: CoachCreateListComponent;
  let fixture: ComponentFixture<CoachCreateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoachCreateListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoachCreateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
