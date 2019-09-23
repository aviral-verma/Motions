import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes,ActivatedRouteSnapshot} from '@angular/router';
import { VideoItemComponent } from './video-item/video-item.component';
import { NotFoundComponent } from './not-found/not-found.component';


const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');
const deactivateGuard = new InjectionToken('deactivateGuard');

const appRoutes: Routes = [
  { path: 'video-list', component: VideoListComponent}, 
  { path: 'video-player', component: VideoPlayerComponent }, 
];

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoPlayerComponent,
    NavigationComponent,
    VideoItemComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } 
    ),
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
