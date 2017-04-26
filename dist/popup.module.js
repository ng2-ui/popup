"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var overlay_1 = require("@ngui/overlay");
var popup_component_1 = require("./popup.component");
exports.NguiPopupComponent = popup_component_1.NguiPopupComponent;
var message_popup_component_1 = require("./message-popup.component");
exports.NguiMessagePopupComponent = message_popup_component_1.NguiMessagePopupComponent;
var NguiPopupModule = (function () {
    function NguiPopupModule() {
    }
    return NguiPopupModule;
}());
NguiPopupModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule, forms_1.FormsModule, overlay_1.NguiOverlayModule],
                declarations: [message_popup_component_1.NguiMessagePopupComponent, popup_component_1.NguiPopupComponent],
                exports: [message_popup_component_1.NguiMessagePopupComponent, popup_component_1.NguiPopupComponent],
                entryComponents: [message_popup_component_1.NguiMessagePopupComponent]
            },] },
];
/** @nocollapse */
NguiPopupModule.ctorParameters = function () { return []; };
exports.NguiPopupModule = NguiPopupModule;
//# sourceMappingURL=popup.module.js.map