// src/app/registration/model/event.entity.ts
export class Event {
  id: number;
  name: string;
  description: string;
  scheduledAt: Date;

  constructor(event: { id?: number, name?: string, description?: string, scheduledAt?: Date }) {
    this.id = event.id || 0;
    this.name = event.name || '';
    this.description = event.description || '';
    this.scheduledAt = event.scheduledAt || new Date();
  }
}
