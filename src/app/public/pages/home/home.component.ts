import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../registration/service/event.service';
import { EventSummaryComponent } from '../../../registration/components/event-summary/event-summary.component';
import { NgForOf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EventSummaryComponent,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getAllWithAttendees().subscribe((data: any) => {
      this.events = data;
    });
  }
}
