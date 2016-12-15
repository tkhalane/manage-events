import { Injectable } from '@angular/core';

@Injectable()
export class EventService {


  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for Event's
  Events: Event[] = [];

  constructor() {
  }

  // Simulate POST /Events
  addEvent(Event: Event): EventService {
    if (!Event.id) {
      Event.id = ++this.lastId;
    }
    this.Events.push(Event);
    return this;
  }

  // Simulate DELETE /Events/:id
  deleteEventById(id: number): EventService {
    this.Events = this.Events
        .filter(Event => Event.id !== id);
    return this;
  }

  // Simulate PUT /Events/:id
  updateEventById(id: number, values: Object = {}): Event {
    let Event = this.getEventById(id);
    if (!Event) {
      return null;
    }
    Object.assign(Event, values);
    return Event;
  }

  // Simulate GET /Events
  getAllEvents(): Event[] {
    return this.Events;
  }

  // Simulate GET /Events/:id
  getEventById(id: number): Event {
    return this.Events
        .filter(Event => Event.id === id)
        .pop();
  }

  // Toggle Event complete
  toggleEventComplete(Event: Event){
    let updatedEvent = this.updateEventById(Event.id, {
      //complete: !Event.complete
    });
    return updatedEvent;
  }

}
