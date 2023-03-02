import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimelineBlockComponent } from './timeline-block/timeline-block.component';
import { AppRoutingModule } from './app-routing';
import { UrlmapperComponent } from './urlmapper/urlmapper.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineBlockComponent,
    UrlmapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
