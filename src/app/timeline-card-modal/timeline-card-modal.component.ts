import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-timeline-card-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-card-modal.component.html',
  styleUrl: './timeline-card-modal.component.scss'
})
export class TimelineCardModalComponent {
  @Input() event: any;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }
}
