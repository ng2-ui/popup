"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_overlay_1 = require("ng2-overlay");
var NguiPopupComponent = (function () {
    function NguiPopupComponent(componentResolver, overlayManager) {
        this.componentResolver = componentResolver;
        this.overlayManager = overlayManager;
    }
    NguiPopupComponent.prototype.ngAfterViewInit = function () {
        var overlayEl = this.marker.element.nativeElement.parentElement.parentElement;
        var overlay = new ng2_overlay_1.Ng2Overlay(overlayEl, {
            id: 'ngui-popup-overlay',
            windowOverlay: true,
            position: 'center center'
        });
        this.overlayManager.register(overlay);
    };
    NguiPopupComponent.prototype.open = function (component, options) {
        this.close();
        this.opened = true;
        this.classNames = options.classNames;
        this.closeButton = options.closeButton;
        var factory = this.componentResolver.resolveComponentFactory(component);
        var componentRef = this.marker.createComponent(factory);
        componentRef.instance.popupOptions = options;
        componentRef.instance.popup = this;
        this.overlayManager.open('ngui-popup-overlay', null); //(id, event)
    };
    NguiPopupComponent.prototype.close = function () {
        this.opened = false;
        this.overlayManager.close('ngui-popup-overlay');
        try {
            this.marker.remove();
        }
        catch (e) { }
    };
    return NguiPopupComponent;
}());
NguiPopupComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'ngui-popup',
                directives: [ng2_overlay_1.Ng2OverlayDirective],
                providers: [ng2_overlay_1.Ng2OverlayManager],
                template: "\n    <div id=\"ngui-popup-overlay\"> <!-- <-- this is overlay -->\n      <div class=\"popup-container {{classNames}}\" [ngClass]=\"{opened: opened}\">\n        <div *ngIf=\"closeButton != false\" class=\"close-popup\" (click)=\"close()\">x</div>\n        <div class=\"marker\" #marker></div> <!-- to position popup component -->\n        <!-- popup component will be here -->\n      </div>\n    </div>\n  ",
                styles: ["\n    .popup-container { \n      background: #fff;\n      border: 1px solid #ccc;\n      box-shadow: 0 5px 15px rgba(0,0,0,.5);\n      border-radius: 5px;\n      width: 600px;\n      display: none;\n    }\n    .popup-container.opened { \n      display: block;\n    }\n    .close-popup {\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n      float: right; \n      cursor: pointer; \n      font-size: 21px;\n      line-height: 1;\n      text-shadow: 0 1px 0 #fff;\n      opacity: 0.2;\n      padding: 10px;\n    }\n    /*.marker ~ * { display:block; background: #fff}*/\n    .popup-container.small { width: 300px}\n    .popup-container.large { width: 900px}\n  "],
                encapsulation: core_1.ViewEncapsulation.None
            },] },
];
/** @nocollapse */
NguiPopupComponent.ctorParameters = function () { return [
    { type: core_1.ComponentFactoryResolver, },
    { type: ng2_overlay_1.Ng2OverlayManager, },
]; };
NguiPopupComponent.propDecorators = {
    'marker': [{ type: core_1.ViewChild, args: ['marker', { read: core_1.ViewContainerRef },] },],
};
exports.NguiPopupComponent = NguiPopupComponent;
//# sourceMappingURL=popup.component.js.map