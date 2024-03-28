import { Component,  OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { EventDataService } from '../event-data.service';
import { CommonModule } from '@angular/common';
import { TimelineCardModalComponent } from '../timeline-card-modal/timeline-card-modal.component';
@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, TimelineCardModalComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {


  events: any[] = [];
  modalOpen: boolean = false;
  selectedEvent: any;

  @ViewChild('eventsCont', { static: true }) eventsCont!: ElementRef;

  constructor(private eventDataService: EventDataService, private el: ElementRef) { }

  ngOnInit(): void {
    this.getEvents();
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    // console.log('wheel event trigerred')
    const target = event.target as HTMLElement;
    if (target.closest('.events') === this.eventsCont.nativeElement) {
      this.eventsCont.nativeElement.scrollLeft += event.deltaY;
    }
  }

  // might be required for mobile
  // @HostListener('touchmove', ['$event'])
  // onTouchMove(event: TouchEvent) {
  //   if (event.target && event.target instanceof HTMLElement) {
  //     const target = event.target as HTMLElement;
  //     if (target.closest('.eventsCont') === this.eventsCont.nativeElement) {
  //       this.eventsCont.nativeElement.scrollLeft += event.touches[0].clientX - event.targetTouches[0].clientX;
  //     }
  //   }
  // }

  getEvents(): void {
    this.eventDataService.getEvents()
      .subscribe(events => this.events = events);
  }

  search(e: Event) {
    console.log('search working',  (e.target as HTMLInputElement).value);
    const query = (e.target as HTMLInputElement).value;
    // Filter events based on the query
  if (query.trim() === '') {
    // If the query is empty, reset the events list to the original list
    this.getEvents();
  } else {
    // Perform search based on the query
    this.events = this.events.filter(event =>
      event.title.toLowerCase().includes(query)
    );
  }
  }

  openModal(event: any): void {
    this.selectedEvent = event;
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
  }
}
