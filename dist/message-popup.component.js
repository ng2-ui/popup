"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NguiMessagePopupComponent = (function () {
    function NguiMessagePopupComponent() {
    }
    return NguiMessagePopupComponent;
}());
NguiMessagePopupComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'ng2-message-popup',
                template: "\n    <div>\n      <div class=\"popup-header\">{{popupOptions.title}}</div>\n      <div class=\"popup-body\">{{popupOptions.message}}</div>\n      <div class=\"popup-footer\" *ngIf=\"popupOptions.buttons\">\n        <button *ngIf=\"popupOptions.buttons.OK\"\n          (click)=\"popupOptions.buttons.OK()\">Ok</button>\n        <button *ngIf=\"popupOptions.buttons.CANCEL\"\n          (click)=\"popupOptions.buttons.CANCEL()\">Cancel</button>\n      </div>\n    </div>\n  ",
                encapsulation: core_1.ViewEncapsulation.None,
                styles: ["\n    .popup-header, .popup-body, .popup-footer {\n      padding: 15px;\n      text-align: center;\n    }\n    .popup-header  {\n      font-weight: bold;\n      font-size: 18px;\n      border-bottom: 1px solid #ccc;\n    }\n  "]
            },] },
];
/** @nocollapse */
NguiMessagePopupComponent.ctorParameters = function () { return []; };
exports.NguiMessagePopupComponent = NguiMessagePopupComponent;
//# sourceMappingURL=message-popup.component.js.map