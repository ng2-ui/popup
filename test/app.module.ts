import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";

import { AppComponent }   from './app.component';
import { Ng2PopupModule }  from 'ng2-popup';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2PopupModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }