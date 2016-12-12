"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var ng2_overlay_1 = require("ng2-overlay");
var ng2_popup_component_1 = require("./ng2-popup.component");
exports.Ng2PopupComponent = ng2_popup_component_1.Ng2PopupComponent;
var ng2_message_popup_component_1 = require("./ng2-message-popup.component");
exports.Ng2MessagePopupComponent = ng2_message_popup_component_1.Ng2MessagePopupComponent;
var Ng2PopupModule = (function () {
    function Ng2PopupModule() {
    }
    return Ng2PopupModule;
}());
Ng2PopupModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, ng2_overlay_1.Ng2OverlayModule],
        declarations: [ng2_message_popup_component_1.Ng2MessagePopupComponent, ng2_popup_component_1.Ng2PopupComponent],
        exports: [ng2_message_popup_component_1.Ng2MessagePopupComponent, ng2_popup_component_1.Ng2PopupComponent],
        entryComponents: [ng2_message_popup_component_1.Ng2MessagePopupComponent]
    }),
    __metadata("design:paramtypes", [])
], Ng2PopupModule);
exports.Ng2PopupModule = Ng2PopupModule;
//# sourceMappingURL=ng2-popup.module.js.map