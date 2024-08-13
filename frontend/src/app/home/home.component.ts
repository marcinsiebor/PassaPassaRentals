import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeshowroomService } from '../homeshowroom.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  backgroundImageUrl: SafeStyle = this.sanitizer.bypassSecurityTrustStyle('url("/assets/images/bg1.jpg")');

  constructor(private showroomService: HomeshowroomService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.showroomService.startBackgroundChangeInterval((url: string) => {
      this.backgroundImageUrl = this.sanitizer.bypassSecurityTrustStyle(`url('${url}')`);
    }, 5000);
  }

  ngOnDestroy() {
    this.showroomService.stopBackgroundChangeInterval();
  }
}
