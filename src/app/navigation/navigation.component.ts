import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import axios from 'axios';
import { VideoService } from '../video.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
  private videoService: VideoService) {}

  searchItem:string = "";

  onKey(event){
    this.videoService.onKey(event);
  }

  // onSearch(event){
  //   this.videoService.onKey(event);
  // }
}
