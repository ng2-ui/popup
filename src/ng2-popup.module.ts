import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import { Ng2OverlayModule } from 'ng2-overlay';

import {Ng2PopupComponent} from "./ng2-popup.component";
import {Ng2MessagePopupComponent} from "./ng2-message-popup.component";

export {
  Ng2PopupComponent,
  Ng2MessagePopupComponent
};

@NgModule({
  imports: [ CommonModule, FormsModule, Ng2OverlayModule ],
  declarations: [Ng2MessagePopupComponent, Ng2PopupComponent],
  exports: [ Ng2MessagePopupComponent, Ng2PopupComponent ],
  entryComponents: [Ng2MessagePopupComponent]
})
export class Ng2PopupModule {}
