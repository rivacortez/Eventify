export class Event {
  id: number;
  name: string;
  description: string;
  scheduledAt: Date;

  constructor(id: number, name: string, description: string, scheduledAt: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.scheduledAt = scheduledAt;
  }
}
