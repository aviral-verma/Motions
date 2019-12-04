import { Injectable } from '@angular/core';
import axios from 'axios';
import { youtube } from '../app/models/youtube'

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videos: any = [];
  selectedVideo: any;
  constructor() { }

  onKey = async (event) => {
    const response = await axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      }).get('search', { 
            params: {
                part: 'snippet',
                maxResults: 9,
                // key: 'AIzaSyD2ZGoCy8IZTLYyoAdbQhRG2n66J1cdWTg',
                key: 'AIzaSyCey3BKtfgdpr8FQpK1GBGGdIAH0UclQ5I',
                // key: 'AIzaSyADR5nw4MmGzzW9aUOVD6piq5K9TdO7iRc',
                q: event.target.value,
            }
    });
    this.videos = response.data.items;
    this.selectedVideo = this.videos[0];
    console.log(response.data.items);
}
}
