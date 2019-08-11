import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service'

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  videos:any = [];
  selectedVideo: any;

  constructor(private videoService: VideoService) {
    this.videos = this.videoService.videos;
    this.selectedVideo = this.videos[0];
    console.log('selected', this.selectedVideo.snippet)
   }

  ngOnInit() {
  }

}
