import { Injectable } from '@angular/core';

@Injectable()
export class EventService {



  // Placeholder for Event's
  Events: Event[] = [];

  constructor() {
  }

  // Simulate POST /Events
  addEvent(Event: Event): EventService {
    this.Events.push(Event);
    return this;
  }

}
