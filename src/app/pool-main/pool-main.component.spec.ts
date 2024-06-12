import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolMainComponent } from './pool-main.component';

describe('PoolMainComponent', () => {
  let component: PoolMainComponent;
  let fixture: ComponentFixture<PoolMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoolMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoolMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
