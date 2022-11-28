import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudententryComponent } from './studententry/studententry.component';
import { StudentviewComponent } from './studentview/studentview.component';

@NgModule({
  declarations: [
    AppComponent,
    StudententryComponent,
    StudentviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
