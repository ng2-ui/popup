# popup
Angular2 Popup(ModaL) directive

## IMPORTANT NOTICE

After 0.5.0 or higher, `ng2-popup` has been changed to `@ngui/popup`. Here are the changes;

* Module `ng2-popup` is changed to `@ngui/popup`.
* Direvtive `ng2-popup` is changed to `ngui-popup`.
* Class name `Ng2PopupModule` is changed to `NguiPopupModule`.

<a href="https://rawgit.com/ng2-ui/popup/master/app/index.html">
  <img src="http://i.imgur.com/AsvUIGs.png" width="50% border="1" />
</a>

Plunker Example: https://plnkr.co/edit/zaESbL?p=preview"

## Install

1. install @ngui/popup

        $ npm install @ngui/popup --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['@ngui/popup'] = 'node_modules/@ngui/popup/dist/popup.umd.js';

3. import NguiPopupModule to your AppModule

        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { NguiPopupModule } from '@ngui/popup';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, NguiPopupModule],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

For full example, please check out `test` directory to see the example of;

  - `systemjs.config.js`
  - `app.module.ts`
  -  and `app.component.ts`.

## Use it in your code

    <ngui-popup #popup></ngui-popup>,

To open/close popup from your component, 
 add ViewChild line into your component
   
      export class AppComponent { 
        @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
    
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



### NguiPopupCompoment Properties and functions

1. open(compoment, options)  
   opens popup with the given compnent and options

   * component: Component
     Any component. To open a message popup, use `Ng2MessagePopupComponent` 
      
     There are two properties will be added when a component is used with open function 
       1. popup: instance of NguiPopupComponent, 
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

    $ git clone https://github.com/ng2-ui/popup.git
    $ cd popup
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

