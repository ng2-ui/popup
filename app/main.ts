// polyfills, comment the following out for debugging purpose
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";
//noinspection TypeScriptCheckImport
import { NguiPopupModule }  from '@ngui/popup';

import { AppComponent }   from './app.component';
import { CustomPopupComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NguiPopupModule],
  declarations: [AppComponent, CustomPopupComponent],
  entryComponents: [CustomPopupComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);

