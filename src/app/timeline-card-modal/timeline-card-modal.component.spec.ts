import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineCardModalComponent } from './timeline-card-modal.component';

describe('TimelineCardModalComponent', () => {
  let component: TimelineCardModalComponent;
  let fixture: ComponentFixture<TimelineCardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineCardModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
