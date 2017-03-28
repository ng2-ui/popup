import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import { NguiOverlayModule } from '@ngui/overlay';

import {NguiPopupComponent} from "./popup.component";
import {NguiMessagePopupComponent} from "./message-popup.component";

export {
  NguiPopupComponent,
  NguiMessagePopupComponent
};

@NgModule({
  imports: [ CommonModule, FormsModule, NguiOverlayModule ],
  declarations: [NguiMessagePopupComponent, NguiPopupComponent],
  exports: [ NguiMessagePopupComponent, NguiPopupComponent ],
  entryComponents: [NguiMessagePopupComponent]
})
export class NguiPopupModule {}
