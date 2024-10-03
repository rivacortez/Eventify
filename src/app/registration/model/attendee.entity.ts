export class Attendee {
  id: number;
  firstName: string;
  lastName: string;
  eventId: number;
  ticketIdentifier: string;
  checkedInAt: Date | null;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    eventId: number,
    ticketIdentifier: string,
    checkedInAt: Date | null
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.eventId = eventId;
    this.ticketIdentifier = ticketIdentifier;
    this.checkedInAt = checkedInAt;
  }
}
