import {
  Component,
  ViewChild,
  Input,
  ViewContainerRef,
  ViewEncapsulation,
  ComponentFactoryResolver, Output, EventEmitter
} from '@angular/core';
import { Ng2OverlayManager, Ng2Overlay, Ng2OverlayDirective } from 'ng2-overlay';

@Component({
  selector: 'ngui-popup',
  directives: [ Ng2OverlayDirective ],
  providers: [ Ng2OverlayManager ],
  template: `
    <div id="ngui-popup-overlay"> <!-- <-- this is overlay -->
      <div class="popup-container {{classNames}}" [ngClass]="{opened: opened}">
        <div *ngIf="closeButton != false" class="close-popup" (click)="close()">x</div>
        <div class="marker" #marker></div> <!-- to position popup component -->
        <!-- popup component will be here -->
      </div>
    </div>
  `,
  styles: [`
    .popup-container { 
      background: #fff;
      border: 1px solid #ccc;
      box-shadow: 0 5px 15px rgba(0,0,0,.5);
      border-radius: 5px;
      width: 600px;
      display: none;
    }
    .popup-container.opened { 
      display: block;
    }
    .close-popup {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      float: right; 
      cursor: pointer; 
      font-size: 21px;
      line-height: 1;
      text-shadow: 0 1px 0 #fff;
      opacity: 0.2;
      padding: 10px;
    }
    /*.marker ~ * { display:block; background: #fff}*/
    .popup-container.small { width: 300px}
    .popup-container.large { width: 900px}
  `],
  encapsulation: ViewEncapsulation.None
})
export class NguiPopupComponent {
  @ViewChild('marker', {read: ViewContainerRef}) marker;
  @Output() popupStatusChanged = new EventEmitter<boolean>();

  opened: boolean;
  closeButton: boolean;
  classNames: string;


  constructor(
    private componentResolver: ComponentFactoryResolver,
    public overlayManager: Ng2OverlayManager
  ) {}
  
  ngAfterViewInit() {
    let overlayEl = this.marker.element.nativeElement.parentElement.parentElement;
    
    let overlay = new Ng2Overlay(overlayEl, {
      id: 'ngui-popup-overlay',
      windowOverlay: true,
      position: 'center center'
    });
    this.overlayManager.register(overlay);
  }

  open(component: any, options: any) {
    this.close();
    this.opened = true;
    this.classNames = options.classNames;
    this.closeButton = options.closeButton;

    let factory = this.componentResolver.resolveComponentFactory(component);
    let componentRef = this.marker.createComponent(factory);
    componentRef.instance.popupOptions = options;
    componentRef.instance.popup = this;
    this.overlayManager.open('ngui-popup-overlay', null); //(id, event)
    this.popupStatusChanged.emit(this.opened);
  }

  close() {
    this.opened = false;
    this.overlayManager.close('ngui-popup-overlay');
    try { this.marker.remove(); } catch(e) {}
    this.popupStatusChanged.emit(this.opened);
  }
}
