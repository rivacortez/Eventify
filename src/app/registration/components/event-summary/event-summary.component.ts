import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatCard, MatCardHeader, MatCardContent, MatCardFooter, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-event-summary',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    TranslateModule,
    MatCardSubtitle,
    MatCardTitle
  ],
  templateUrl: './event-summary.component.html',
  styleUrl: './event-summary.component.css'
})
export class EventSummaryComponent implements OnChanges {
  @Input() event: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['event']) {
      this.logEventData();
    }
  }

  logEventData() {
    console.log('Event data:', this.event);
  }

  get registeredAttendees() {
    return this.event?.attendees?.length || 0;
  }

  get attendancePercentage() {
    const checkedInCount = this.event?.attendees?.filter((attendee: any) => attendee.checkedInAt).length || 0;
    return this.event?.attendees?.length ? (checkedInCount / this.event.attendees.length) * 100 : 0;
  }
}
