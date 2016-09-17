// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";
//noinspection TypeScriptCheckImport
import { Ng2PopupModule }  from 'ng2-popup';

import { AppComponent }   from './app.component';
import { CustomPopupComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2PopupModule],
  declarations: [AppComponent, CustomPopupComponent],
  entryComponents: [CustomPopupComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);

