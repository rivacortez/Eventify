import {Component, OnInit} from '@angular/core';
import {EventService} from '../../../registration/service/event.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getAll().subscribe((data: any) => {
      this.events = data;
    });
  }
}
