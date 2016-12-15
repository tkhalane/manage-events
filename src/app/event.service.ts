import { Injectable } from '@angular/core';

@Injectable()
export class EventService {



  // Placeholder for Event's
  Events: Event[] = [];

  constructor() {
  }

  // Simulate POST /Events
  addEvent(): EventService {
    //this.Events.push();
    return this;
  }

}
