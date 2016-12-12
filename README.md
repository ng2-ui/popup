# ng2-popup
Angular2 Popup(ModaL) directive

<a href="https://rawgit.com/ng2-ui/ng2-popup/master/app/index.html">
  <img src="http://i.imgur.com/AsvUIGs.png" width="50% border="1" />
</a>

Plunker Example: https://plnkr.co/edit/zaESbL?p=preview"

## Install

1. install ng2-popup

        $ npm install ng2-popup --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['ng2-popup'] = 'node_modules/ng2-popup/dist';
        packages['ng2-popup'] = { main: 'ng2-popup.umd.js', defaultExtension: 'js' }

3. import Ng2PopupModule to your AppModule

        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { Ng2PopupModule } from 'ng2-popup';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, Ng2PopupModule],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

For full example, please check out `test` directory to see the example of;

  - `systemjs.config.js`
  - `app.module.ts`
  -  and `app.component.ts`.

## Use it in your code

    <ng2-popup #popup></ng2-popup>,

To open/close popup from your component, 
 add ViewChild line into your component
   
      export class AppComponent { 
        @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;
    
        openPopup() {
          this.popup.open(Ng2MessagePopupComponent, {
            title: 'My Title',
            message: 'My Message'
          }
          ..
        }
      }

## **ng2-ui** welcomes new members and contributors

This module is only improved and maintained by contributors like you.

As a contributor, it's NOT required to be skilled in Javascript nor Angular2. 
You are only to be open-minded and interested in helping others.
As a contributor, you do following;

  * Updating README.md
  * Improving code comments
  * Answering issues and building FAQ
  * Documentation
  * Translation

In result of your active contribution, you will be listed as a core contributor
on https://ng2-ui.github.io, and a member of ng2-ui too.

If you are interested in becoming a contributor and/or a member of ng-ui,
please send me email to `allenhwkim AT gmail.com` with your github id. 



### Ng2PopupCompoment Properties and functions

1. open(compoment, options)  
   opens popup with the given compnent and options

   * component: Component
     Any component. To open a message popup, use `Ng2MessagePopupComponent` 
      
     There are two properties will be added when a component is used with open function 
       1. popup: instance of Ng2PopupComponent, 
          so that you can open and close the popup within your component
       2. popupOptions: options passed from open function

   * options
     
     * classNames: string of class names that will be use for popup. 
        e.g. 'small', 'large', 'my-class', etc
     * closeButton: default true.
        if false, there will be no close button
        
     For Ng2MessagePopupComponent
     
       * title: Title string
       * message: message string
       * buttons: button functions. e.g.
       
       ```
         {
            OK: () => {
              this.message = "Ok button is pressed";
            },
            CANCEL: () => {
              this.message = "Cancel button is pressed";
              this.popup.close();
            }
         }
       ```
2. close()
   closes the currently opened popup.
 

## For Developers

### To start

    $ git clone https://github.com/ng2-ui/ng2-map.git
    $ cd ng2-popup
    $ npm install
    $ npm start


## Run locally and test it

1. build and run 

      For Windows Environment (in CMD)
          $ .\build.cmd
    
      For Mac Environment (in terminal)
          $  ./build.sh

2. start the server

      $ npm start

