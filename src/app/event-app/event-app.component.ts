import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import {EventService} from '../event';

@Component({
  moduleId: module.id,
  selector: 'app-event-app',
  templateUrl: './event-app.component.html',
  styleUrls: ['./event-app.component.css'],
  providers: [EventService]
})
export class EventAppComponent {

  newEvent: Event = new Event();

  constructor(private eventService: EventService) {
  }

  addEvent() {
    this.eventService.addEvent(this.newEvent);
    this.newEvent = new Event();
  }

  toggleEventComplete(event) {
    this.eventService.toggleEventComplete(event);
  }

  removeEvent(event) {
    this.eventService.deleteEventById(event.id);
  }

  get events() {
    return this.eventService.getAllEvents();
  }
}
