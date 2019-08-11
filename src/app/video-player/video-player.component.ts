import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  constructor(private videoService: VideoService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  videoSrc = this.videoService.selectedVideo;
  safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoSrc);

}
