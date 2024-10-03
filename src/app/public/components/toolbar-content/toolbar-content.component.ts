import {Component, OnInit} from '@angular/core';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {MatToolbar} from '@angular/material/toolbar';
import {LogoApiService} from '../../../shared/services/logo-api.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    LanguageSwitcherComponent,
    MatToolbar,
    NgIf
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent implements OnInit {
  logoUrl: string | undefined;

  constructor(private logoApiService: LogoApiService) {}

  ngOnInit() {
    this.logoUrl = this.logoApiService.getUrlToLogo({ url: 'https://eventify.io/' });
  }
}
