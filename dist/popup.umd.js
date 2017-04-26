(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["popup"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"));
	else
		root["popup"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/forms"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var NguiOverlayManager = NguiOverlayManager_1 = (function () {
    function NguiOverlayManager() {
    }
    NguiOverlayManager.prototype.register = function (overlay) {
        NguiOverlayManager_1.overlays[overlay.id] = overlay;
        // console.log('overlay.register, OverlayManager.overlays', OverlayManager.overlays);
    };
    NguiOverlayManager.prototype.open = function (arg, event) {
        var overlay = typeof arg === 'string' ? NguiOverlayManager_1.overlays[arg] : arg;
        if (!overlay.opened) {
            overlay.positionIt(event);
            overlay.opened = true;
        }
    };
    NguiOverlayManager.prototype.close = function (arg) {
        var overlay = typeof arg === 'string' ? NguiOverlayManager_1.overlays[arg] : arg;
        overlay.element.style.display = 'none';
        overlay.opened = false;
    };
    return NguiOverlayManager;
}());
//list of overlay objects
NguiOverlayManager.overlays = {};
NguiOverlayManager = NguiOverlayManager_1 = __decorate([
    core_1.Injectable()
], NguiOverlayManager);
exports.NguiOverlayManager = NguiOverlayManager;
var NguiOverlayManager_1;
//# sourceMappingURL=overlay-manager.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var Ng2OverlayManager = (function () {
    function Ng2OverlayManager() {
    }
    Ng2OverlayManager.prototype.register = function (overlay) {
        Ng2OverlayManager.overlays[overlay.id] = overlay;
        // console.log('overlay.register, OverlayManager.overlays', OverlayManager.overlays);
    };
    Ng2OverlayManager.prototype.open = function (arg, event) {
        var overlay = typeof arg === 'string' ? Ng2OverlayManager.overlays[arg] : arg;
        if (!overlay.opened) {
            overlay.positionIt(event);
            overlay.opened = true;
        }
    };
    Ng2OverlayManager.prototype.close = function (arg) {
        var overlay = typeof arg === 'string' ? Ng2OverlayManager.overlays[arg] : arg;
        overlay.element.style.display = 'none';
        overlay.opened = false;
    };
    //list of overlay objects
    Ng2OverlayManager.overlays = {};
    Ng2OverlayManager.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Ng2OverlayManager.ctorParameters = function () { return []; };
    return Ng2OverlayManager;
}());
exports.Ng2OverlayManager = Ng2OverlayManager;
//# sourceMappingURL=ng2-overlay-manager.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var NguiMessagePopupComponent = (function () {
    function NguiMessagePopupComponent() {
    }
    return NguiMessagePopupComponent;
}());
NguiMessagePopupComponent = __decorate([
    core_1.Component({
        selector: 'ng2-message-popup',
        template: "\n    <div>\n      <div class=\"popup-header\">{{popupOptions.title}}</div>\n      <div class=\"popup-body\">{{popupOptions.message}}</div>\n      <div class=\"popup-footer\" *ngIf=\"popupOptions.buttons\">\n        <button *ngIf=\"popupOptions.buttons.OK\"\n          (click)=\"popupOptions.buttons.OK()\">Ok</button>\n        <button *ngIf=\"popupOptions.buttons.CANCEL\"\n          (click)=\"popupOptions.buttons.CANCEL()\">Cancel</button>\n      </div>\n    </div>\n  ",
        encapsulation: core_1.ViewEncapsulation.None,
        styles: ["\n    .popup-header, .popup-body, .popup-footer {\n      padding: 15px;\n      text-align: center;\n    }\n    .popup-header  {\n      font-weight: bold;\n      font-size: 18px;\n      border-bottom: 1px solid #ccc;\n    }\n  "]
    })
], NguiMessagePopupComponent);
exports.NguiMessagePopupComponent = NguiMessagePopupComponent;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_overlay_1 = __webpack_require__(14);
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
__decorate([
    core_1.ViewChild('marker', { read: core_1.ViewContainerRef }),
    __metadata("design:type", Object)
], NguiPopupComponent.prototype, "marker", void 0);
NguiPopupComponent = __decorate([
    core_1.Component({
        selector: 'ngui-popup',
        directives: [ng2_overlay_1.Ng2OverlayDirective],
        providers: [ng2_overlay_1.Ng2OverlayManager],
        template: "\n    <div id=\"ngui-popup-overlay\"> <!-- <-- this is overlay -->\n      <div class=\"popup-container {{classNames}}\" [ngClass]=\"{opened: opened}\">\n        <div *ngIf=\"closeButton != false\" class=\"close-popup\" (click)=\"close()\">x</div>\n        <div class=\"marker\" #marker></div> <!-- to position popup component -->\n        <!-- popup component will be here -->\n      </div>\n    </div>\n  ",
        styles: ["\n    .popup-container { \n      background: #fff;\n      border: 1px solid #ccc;\n      box-shadow: 0 5px 15px rgba(0,0,0,.5);\n      border-radius: 5px;\n      width: 600px;\n      display: none;\n    }\n    .popup-container.opened { \n      display: block;\n    }\n    .close-popup {\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n      float: right; \n      cursor: pointer; \n      font-size: 21px;\n      line-height: 1;\n      text-shadow: 0 1px 0 #fff;\n      opacity: 0.2;\n      padding: 10px;\n    }\n    /*.marker ~ * { display:block; background: #fff}*/\n    .popup-container.small { width: 300px}\n    .popup-container.large { width: 900px}\n  "],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
        ng2_overlay_1.Ng2OverlayManager])
], NguiPopupComponent);
exports.NguiPopupComponent = NguiPopupComponent;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var overlay_manager_1 = __webpack_require__(1);
var overlay_1 = __webpack_require__(8);
var NguiOverlayDirective = (function () {
    function NguiOverlayDirective(viewContainerRef, overlayManager) {
        this.viewContainerRef = viewContainerRef;
        this.overlayManager = overlayManager;
        this.el = this.viewContainerRef.element.nativeElement;
    }
    NguiOverlayDirective.prototype.ngAfterViewInit = function () {
        this.wrapItWithOverlayTag();
        this.registerToOverlayManager();
    };
    NguiOverlayDirective.prototype.wrapItWithOverlayTag = function () {
        //console.log('wrapped overlay directive element with <ngui-overlay>');
        this.overlayEl = document.createElement('ngui-overlay');
        this.overlayEl.style.display = 'none';
        this.el.parentElement.insertBefore(this.overlayEl, this.el.nextSibling);
        this.overlayEl.appendChild(this.el);
    };
    //create Overlay object,  then register this element to overlayManager
    NguiOverlayDirective.prototype.registerToOverlayManager = function () {
        var positionStr = this.overlayPosition;
        var overlay = new overlay_1.NguiOverlay(this.overlayEl, {
            id: this.el.id,
            windowOverlay: this.overlayOf == "window",
            position: positionStr
        });
        //console.log('registering overlay', overlay);
        this.overlayManager.register(overlay);
    };
    return NguiOverlayDirective;
}());
__decorate([
    core_1.Input('ngui-overlay-of'),
    __metadata("design:type", String)
], NguiOverlayDirective.prototype, "overlayOf", void 0);
__decorate([
    core_1.Input('ngui-overlay-position'),
    __metadata("design:type", String)
], NguiOverlayDirective.prototype, "overlayPosition", void 0);
NguiOverlayDirective = __decorate([
    core_1.Directive({
        selector: '[ngui-overlay], [ngui-overlay-of], [ngui-overlay-position]',
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef,
        overlay_manager_1.NguiOverlayManager])
], NguiOverlayDirective);
exports.NguiOverlayDirective = NguiOverlayDirective;
//# sourceMappingURL=overlay.directive.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getDocumentPosition(oElement) {
    var posX = 0, posY = 0;
    if (oElement.offsetParent) {
        for (; oElement; oElement = oElement.offsetParent) {
            posX += oElement.offsetLeft;
            posY += oElement.offsetTop;
        }
        return { x: posX, y: posY };
    }
    else {
        return { x: oElement['x'], y: oElement['y'] };
    }
}
function getMousePositionInElement(evt, element) {
    evt = evt || window.event;
    var posX = 0, posY = 0;
    var elPos = getDocumentPosition(element);
    if (evt.pageX || evt.pageY) {
        posX = evt.pageX;
        posY = evt.pageY;
    }
    else if (evt.clientX || evt.clientY) {
        posX = evt.clientX +
            document.body.scrollLeft +
            document.documentElement.scrollLeft;
        posY = evt.clientY +
            document.body.scrollTop +
            document.documentElement.scrollTop;
    }
    return {
        x: posX - elPos.x,
        y: posY - elPos.y
    };
}
var NguiOverlay = (function () {
    function NguiOverlay(el, options) {
        options = options || {};
        this.id = options.id;
        this.type = options.type;
        if (!this.id) {
            throw "Invalid overlay id";
        }
        this.element = el; // overlay wrapper element with table dsplay
        this.windowOverlay = options.windowOverlay;
        this.position = this.getPositionProperty(options.position || 'center center');
    }
    NguiOverlay.prototype.positionIt = function (event) {
        if (this.position.inside) {
            this.positionItInside(this.position);
        }
        else {
            this.positionItOutside(this.position, event);
        }
    };
    NguiOverlay.prototype.getPositionProperty = function (positionStr) {
        var position = {}, inside;
        var _a = positionStr.split(' '), vertical = _a[0], horizontal = _a[1], insideStr = _a[2];
        horizontal = horizontal || 'center';
        vertical = vertical || 'center';
        inside = (insideStr !== 'outside' || this.windowOverlay);
        position.horizontal = NguiOverlay[horizontal.toUpperCase()];
        position.vertical = NguiOverlay[vertical.toUpperCase()];
        position.inside = inside;
        return position;
    };
    NguiOverlay.prototype.positionItInside = function (position) {
        this.element.style.display = 'flex';
        //top / left positioning
        if (this.windowOverlay) {
            this.element.style.position = 'fixed';
            //works as blocker
            Object.assign(this.element.style, {
                backgroundColor: 'rgba(0,0,0,0.2)',
                top: '0', left: '0', bottom: '0', right: '0',
                width: '100%', height: '100%'
            });
        }
        else {
            //adjust top/left to match to parentElement
            var parentEl = this.element.parentElement;
            //works as a blocker
            Object.assign(this.element.style, {
                position: 'absolute',
                // backgroundColor: 'transparent',
                backgroundColor: 'rgba(0,0,0,0.2)',
                top: parentEl.offsetTop + 'px',
                left: parentEl.offsetLeft + 'px',
                width: parentEl.offsetWidth + 'px',
                height: parentEl.offsetHeight + 'px'
            });
        }
        ;
        //horizontal position
        switch (position.horizontal) {
            case NguiOverlay.LEFT:
                this.element.style.justifyContent = 'flex-start';
                break;
            case NguiOverlay.CENTER:
                this.element.style.justifyContent = 'center';
                break;
            case NguiOverlay.RIGHT:
                this.element.style.justifyContent = 'flex-end';
                break;
        }
        //vertical position
        switch (position.vertical) {
            case NguiOverlay.LEFT:
                this.element.style.alignItems = 'flex-start';
                break;
            case NguiOverlay.CENTER:
            case NguiOverlay.MIDDLE:
                this.element.style.alignItems = 'center';
                break;
            case NguiOverlay.RIGHT:
                this.element.style.alignItems = 'flex-end';
                break;
        }
    };
    NguiOverlay.prototype.positionItOutside = function (position, event) {
        //adjust top/left to match to parentElement
        var parentEl = this.element.parentElement;
        //works as guide line?
        Object.assign(this.element.style, {
            position: 'absolute',
            pointerEvents: 'none',
            top: parentEl.offsetTop + 'px',
            left: parentEl.offsetLeft + 'px',
            width: parentEl.offsetWidth + 'px',
            height: parentEl.offsetHeight + 'px'
        });
        this.element.style.display = 'block';
        var elToPosition = (this.element.children[0]);
        elToPosition.style.position = 'absolute';
        elToPosition.style.pointerEvents = 'auto';
        switch (position.vertical) {
            case NguiOverlay.TOP:
                elToPosition.style.bottom = this.element.offsetHeight + 'px';
                break;
            case NguiOverlay.BOTTOM:
                elToPosition.style.top = this.element.offsetHeight + 'px';
                break;
            case NguiOverlay.LEFT:
                elToPosition.style.right = this.element.offsetWidth + 'px';
                break;
            case NguiOverlay.RIGHT:
                elToPosition.style.left = this.element.offsetWidth + 'px';
                break;
        }
        switch (position.horizontal) {
            case NguiOverlay.CENTER:
                elToPosition.style.left = (this.element.offsetWidth - elToPosition.offsetWidth) / 2 + 'px';
                break;
            case NguiOverlay.LEFT:
                elToPosition.style.left = '0';
                break;
            case NguiOverlay.RIGHT:
                elToPosition.style.right = '0';
                break;
            case NguiOverlay.TOP:
                elToPosition.style.top = '0';
                break;
            case NguiOverlay.BOTTOM:
                elToPosition.style.bottom = '0';
                break;
            case NguiOverlay.CURSOR:
                var mousePos = getMousePositionInElement(event, this.element);
                if ((mousePos.x + elToPosition.offsetWidth) > this.element.offsetWidth) {
                    elToPosition.style.left = (this.element.offsetWidth - elToPosition.offsetWidth - 5) + 'px';
                }
                else if (mousePos.x < elToPosition.offsetWidth / 2) {
                    elToPosition.style.left = '0px';
                }
                else {
                    elToPosition.style.left = mousePos.x - elToPosition.offsetWidth / 2 + 'px';
                }
                break;
        }
    };
    return NguiOverlay;
}());
NguiOverlay.TOP = 11;
NguiOverlay.MIDDLE = 12;
NguiOverlay.BOTTOM = 13;
NguiOverlay.LEFT = 21;
NguiOverlay.CENTER = 22;
NguiOverlay.RIGHT = 23;
NguiOverlay.CURSOR = 31;
exports.NguiOverlay = NguiOverlay;
//# sourceMappingURL=overlay.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var ng2_overlay_manager_1 = __webpack_require__(2);
var ng2_overlay_1 = __webpack_require__(10);
var Ng2OverlayDirective = (function () {
    function Ng2OverlayDirective(viewContainerRef, overlayManager) {
        this.viewContainerRef = viewContainerRef;
        this.overlayManager = overlayManager;
        this.el = this.viewContainerRef.element.nativeElement;
    }
    Ng2OverlayDirective.prototype.ngAfterViewInit = function () {
        this.wrapItWithOverlayTag();
        this.registerToOverlayManager();
    };
    Ng2OverlayDirective.prototype.wrapItWithOverlayTag = function () {
        //console.log('wrapped overlay directive element with <ng2-overlay>');
        this.overlayEl = document.createElement('ng2-overlay');
        this.overlayEl.style.display = 'none';
        this.el.parentElement.insertBefore(this.overlayEl, this.el.nextSibling);
        this.overlayEl.appendChild(this.el);
    };
    //create Overlay object,  then register this element to overlayManager
    Ng2OverlayDirective.prototype.registerToOverlayManager = function () {
        var positionStr = this.overlayPosition;
        var overlay = new ng2_overlay_1.Ng2Overlay(this.overlayEl, {
            id: this.el.id,
            windowOverlay: this.overlayOf == "window",
            position: positionStr
        });
        //console.log('registering overlay', overlay);
        this.overlayManager.register(overlay);
    };
    Ng2OverlayDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ng2-overlay], [ng2-overlay-of], [ng2-overlay-position]',
                },] },
    ];
    /** @nocollapse */
    Ng2OverlayDirective.ctorParameters = function () { return [
        { type: core_1.ViewContainerRef, },
        { type: ng2_overlay_manager_1.Ng2OverlayManager, },
    ]; };
    Ng2OverlayDirective.propDecorators = {
        'overlayOf': [{ type: core_1.Input, args: ['ng2-overlay-of',] },],
        'overlayPosition': [{ type: core_1.Input, args: ['ng2-overlay-position',] },],
    };
    return Ng2OverlayDirective;
}());
exports.Ng2OverlayDirective = Ng2OverlayDirective;
//# sourceMappingURL=ng2-overlay.directive.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng2_util_1 = __webpack_require__(16);
var Ng2Overlay = (function () {
    function Ng2Overlay(el, options) {
        options = options || {};
        this.id = options.id;
        this.type = options.type;
        if (!this.id) {
            throw "Invalid overlay id";
        }
        this.element = el; // overlay wrapper element with table dsplay
        this.windowOverlay = options.windowOverlay;
        this.position = this.getPositionProperty(options.position || 'center center');
    }
    Ng2Overlay.prototype.positionIt = function (event) {
        if (this.position.inside) {
            this.positionItInside(this.position);
        }
        else {
            this.positionItOutside(this.position, event);
        }
    };
    Ng2Overlay.prototype.getPositionProperty = function (positionStr) {
        var position = {}, inside;
        var _a = positionStr.split(' '), vertical = _a[0], horizontal = _a[1], insideStr = _a[2];
        horizontal = horizontal || 'center';
        vertical = vertical || 'center';
        inside = (insideStr !== 'outside' || this.windowOverlay);
        position.horizontal = Ng2Overlay[horizontal.toUpperCase()];
        position.vertical = Ng2Overlay[vertical.toUpperCase()];
        position.inside = inside;
        return position;
    };
    Ng2Overlay.prototype.positionItInside = function (position) {
        this.element.style.display = 'flex';
        //top / left positioning
        if (this.windowOverlay) {
            this.element.style.position = 'fixed';
            //works as blocker
            Object.assign(this.element.style, {
                backgroundColor: 'rgba(0,0,0,0.2)',
                top: '0', left: '0', bottom: '0', right: '0',
                width: '100%', height: '100%'
            });
        }
        else {
            //adjust top/left to match to parentElement
            var parentEl = this.element.parentElement;
            //works as a blocker
            Object.assign(this.element.style, {
                position: 'absolute',
                // backgroundColor: 'transparent',
                backgroundColor: 'rgba(0,0,0,0.2)',
                top: parentEl.offsetTop + 'px',
                left: parentEl.offsetLeft + 'px',
                width: parentEl.offsetWidth + 'px',
                height: parentEl.offsetHeight + 'px'
            });
        }
        ;
        //horizontal position
        switch (position.horizontal) {
            case Ng2Overlay.LEFT:
                this.element.style.justifyContent = 'flex-start';
                break;
            case Ng2Overlay.CENTER:
                this.element.style.justifyContent = 'center';
                break;
            case Ng2Overlay.RIGHT:
                this.element.style.justifyContent = 'flex-end';
                break;
        }
        //vertical position
        switch (position.vertical) {
            case Ng2Overlay.LEFT:
                this.element.style.alignItems = 'flex-start';
                break;
            case Ng2Overlay.CENTER:
            case Ng2Overlay.MIDDLE:
                this.element.style.alignItems = 'center';
                break;
            case Ng2Overlay.RIGHT:
                this.element.style.alignItems = 'flex-end';
                break;
        }
    };
    Ng2Overlay.prototype.positionItOutside = function (position, event) {
        //adjust top/left to match to parentElement
        var parentEl = this.element.parentElement;
        //works as guide line?
        Object.assign(this.element.style, {
            position: 'absolute',
            pointerEvents: 'none',
            top: parentEl.offsetTop + 'px',
            left: parentEl.offsetLeft + 'px',
            width: parentEl.offsetWidth + 'px',
            height: parentEl.offsetHeight + 'px'
        });
        this.element.style.display = 'block';
        var elToPosition = (this.element.children[0]);
        elToPosition.style.position = 'absolute';
        elToPosition.style.pointerEvents = 'auto';
        switch (position.vertical) {
            case Ng2Overlay.TOP:
                elToPosition.style.bottom = this.element.offsetHeight + 'px';
                break;
            case Ng2Overlay.BOTTOM:
                elToPosition.style.top = this.element.offsetHeight + 'px';
                break;
            case Ng2Overlay.LEFT:
                elToPosition.style.right = this.element.offsetWidth + 'px';
                break;
            case Ng2Overlay.RIGHT:
                elToPosition.style.left = this.element.offsetWidth + 'px';
                break;
        }
        switch (position.horizontal) {
            case Ng2Overlay.CENTER:
                elToPosition.style.left = (this.element.offsetWidth - elToPosition.offsetWidth) / 2 + 'px';
                break;
            case Ng2Overlay.LEFT:
                elToPosition.style.left = '0';
                break;
            case Ng2Overlay.RIGHT:
                elToPosition.style.right = '0';
                break;
            case Ng2Overlay.TOP:
                elToPosition.style.top = '0';
                break;
            case Ng2Overlay.BOTTOM:
                elToPosition.style.bottom = '0';
                break;
            case Ng2Overlay.CURSOR:
                var mousePos = ng2_util_1.Ng2Util.getMousePositionInElement(event, this.element);
                if ((mousePos.x + elToPosition.offsetWidth) > this.element.offsetWidth) {
                    elToPosition.style.left = (this.element.offsetWidth - elToPosition.offsetWidth - 5) + 'px';
                }
                else if (mousePos.x < elToPosition.offsetWidth / 2) {
                    elToPosition.style.left = '0px';
                }
                else {
                    elToPosition.style.left = mousePos.x - elToPosition.offsetWidth / 2 + 'px';
                }
                break;
        }
    };
    Ng2Overlay.TOP = 11;
    Ng2Overlay.MIDDLE = 12;
    Ng2Overlay.BOTTOM = 13;
    Ng2Overlay.LEFT = 21;
    Ng2Overlay.CENTER = 22;
    Ng2Overlay.RIGHT = 23;
    Ng2Overlay.CURSOR = 31;
    return Ng2Overlay;
}());
exports.Ng2Overlay = Ng2Overlay;
//# sourceMappingURL=ng2-overlay.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var common_1 = __webpack_require__(3);
var overlay_1 = __webpack_require__(12);
var popup_component_1 = __webpack_require__(6);
exports.NguiPopupComponent = popup_component_1.NguiPopupComponent;
var message_popup_component_1 = __webpack_require__(5);
exports.NguiMessagePopupComponent = message_popup_component_1.NguiMessagePopupComponent;
var NguiPopupModule = (function () {
    function NguiPopupModule() {
    }
    return NguiPopupModule;
}());
NguiPopupModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, overlay_1.NguiOverlayModule],
        declarations: [message_popup_component_1.NguiMessagePopupComponent, popup_component_1.NguiPopupComponent],
        exports: [message_popup_component_1.NguiMessagePopupComponent, popup_component_1.NguiPopupComponent],
        entryComponents: [message_popup_component_1.NguiMessagePopupComponent]
    })
], NguiPopupModule);
exports.NguiPopupModule = NguiPopupModule;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var overlay_1 = __webpack_require__(8);
exports.NguiOverlay = overlay_1.NguiOverlay;
var overlay_manager_1 = __webpack_require__(1);
exports.NguiOverlayManager = overlay_manager_1.NguiOverlayManager;
var overlay_directive_1 = __webpack_require__(7);
exports.NguiOverlayDirective = overlay_directive_1.NguiOverlayDirective;
var overlay_module_1 = __webpack_require__(13);
exports.NguiOverlayModule = overlay_module_1.NguiOverlayModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var common_1 = __webpack_require__(3);
var overlay_manager_1 = __webpack_require__(1);
exports.NguiOverlayManager = overlay_manager_1.NguiOverlayManager;
var overlay_directive_1 = __webpack_require__(7);
var NguiOverlayModule = (function () {
    function NguiOverlayModule() {
    }
    return NguiOverlayModule;
}());
NguiOverlayModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule],
        declarations: [overlay_directive_1.NguiOverlayDirective],
        providers: [overlay_manager_1.NguiOverlayManager],
        exports: [overlay_directive_1.NguiOverlayDirective]
    })
], NguiOverlayModule);
exports.NguiOverlayModule = NguiOverlayModule;
;
//# sourceMappingURL=overlay.module.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng2_overlay_1 = __webpack_require__(10);
exports.Ng2Overlay = ng2_overlay_1.Ng2Overlay;
var ng2_overlay_manager_1 = __webpack_require__(2);
exports.Ng2OverlayManager = ng2_overlay_manager_1.Ng2OverlayManager;
var ng2_overlay_directive_1 = __webpack_require__(9);
exports.Ng2OverlayDirective = ng2_overlay_directive_1.Ng2OverlayDirective;
var ng2_overlay_module_1 = __webpack_require__(15);
exports.Ng2OverlayModule = ng2_overlay_module_1.Ng2OverlayModule;
//# sourceMappingURL=index.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(4);
var common_1 = __webpack_require__(3);
var ng2_overlay_manager_1 = __webpack_require__(2);
exports.Ng2OverlayManager = ng2_overlay_manager_1.Ng2OverlayManager;
var ng2_overlay_directive_1 = __webpack_require__(9);
var Ng2OverlayModule = (function () {
    function Ng2OverlayModule() {
    }
    Ng2OverlayModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    declarations: [ng2_overlay_directive_1.Ng2OverlayDirective],
                    providers: [ng2_overlay_manager_1.Ng2OverlayManager],
                    exports: [ng2_overlay_directive_1.Ng2OverlayDirective]
                },] },
    ];
    /** @nocollapse */
    Ng2OverlayModule.ctorParameters = function () { return []; };
    return Ng2OverlayModule;
}());
exports.Ng2OverlayModule = Ng2OverlayModule;
;
//# sourceMappingURL=ng2-overlay.module.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Ng2Util = (function () {
    function Ng2Util() {
    }
    Ng2Util.getDocumentPosition = function (oElement) {
        var posX = 0, posY = 0;
        if (oElement.offsetParent) {
            for (; oElement; oElement = oElement.offsetParent) {
                posX += oElement.offsetLeft;
                posY += oElement.offsetTop;
            }
            return { x: posX, y: posY };
        }
        else {
            return { x: oElement['x'], y: oElement['y'] };
        }
    };
    Ng2Util.getMousePositionInElement = function (evt, element) {
        evt = evt || window.event;
        var posX = 0, posY = 0;
        var elPos = this.getDocumentPosition(element);
        if (evt.pageX || evt.pageY) {
            posX = evt.pageX;
            posY = evt.pageY;
        }
        else if (evt.clientX || evt.clientY) {
            posX = evt.clientX +
                document.body.scrollLeft +
                document.documentElement.scrollLeft;
            posY = evt.clientY +
                document.body.scrollTop +
                document.documentElement.scrollTop;
        }
        return {
            x: posX - elPos.x,
            y: posY - elPos.y
        };
    };
    return Ng2Util;
}());
exports.Ng2Util = Ng2Util;
//# sourceMappingURL=ng2-util.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var popup_component_1 = __webpack_require__(6);
exports.NguiPopupComponent = popup_component_1.NguiPopupComponent;
var message_popup_component_1 = __webpack_require__(5);
exports.NguiMessagePopupComponent = message_popup_component_1.NguiMessagePopupComponent;
var popup_module_1 = __webpack_require__(11);
exports.NguiPopupModule = popup_module_1.NguiPopupModule;


/***/ })
/******/ ]);
});
//# sourceMappingURL=popup.umd.js.map