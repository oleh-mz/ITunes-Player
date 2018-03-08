import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Include the JSONP module for JSONP support
import { HttpModule, JsonpModule } from '@angular/http';

// Import the Kendo UI Component
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { PlayerComponent } from './player/player.component';
import { TrackControlComponent } from './track/track-control/track-control.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    PlayerComponent,
    TrackControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,


    // include the JSONP module so it can be used in the application
    JsonpModule,
    // Register the Kendo UI Grid
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

