import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimelineBlockComponent } from './timeline-block/timeline-block.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
