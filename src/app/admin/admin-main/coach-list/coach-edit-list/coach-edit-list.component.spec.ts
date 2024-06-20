import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachEditListComponent } from './coach-edit-list.component';

describe('CoachEditListComponent', () => {
  let component: CoachEditListComponent;
  let fixture: ComponentFixture<CoachEditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoachEditListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoachEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
