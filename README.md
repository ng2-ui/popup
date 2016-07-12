# ng2-popup
Angular2 Popup(ModaL) directive

<a href="https://plnkr.co/edit/zaESbL?p=preview">
  <img src="http://i.imgur.com/AsvUIGs.png" width="50% border="1" />
</a>

## Install

1. install ng2-popup

        $ npm install ng2-popup --save

2. add `map` and `packages` to your `systemjs.config.js`

        map['ng2-popup'] = 'node_modules/ng2-popup'
        packages['ng2-popup'] = { main: 'dist/index.js', defaultExtension: 'js']

## Use it in your code

1. Import directives and add `ng2-popup` to your component

        import { Ng2MessagePopupComponent, Ng2PopupComponent} from 'ng2-popup';

        @Component({
          selector: 'my-app',
          templateUrl: '<ng2-popup #popup></ng2-popup>',
          directives: [ Ng2PopupComponent ]
        })

2. To open/close popup from your component, 
   add ViewChild line into your component
   
        export class AppComponent { 
          @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;
     
          openPopup() {
            this.popup.open(Ng2MessagePopupComponent, {
              title: 'My Title',
              messge: 'My Message'
            }
            ..
          }
        }
        

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
