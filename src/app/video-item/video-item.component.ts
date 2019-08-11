import { Component, Input, OnInit } from '@angular/core';
import { VideoService } from '../video.service'

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {

  constructor(private videoService: VideoService) { }
  @Input()
  videos: any;
  selectedVideoSrc: any;

  ngOnInit() {
  }

  onVideoSelected(video){
   this.selectedVideoSrc = `https://www.youtube.com/embed/${video.id.videoId }`;
   this.videoService.selectedVideo = this.selectedVideoSrc;

  }

}
