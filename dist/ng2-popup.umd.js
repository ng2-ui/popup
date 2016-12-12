(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ng2-popup"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else
		root["ng2-popup"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ng2_popup_component_1 = __webpack_require__(1);
	exports.Ng2PopupComponent = ng2_popup_component_1.Ng2PopupComponent;
	var ng2_message_popup_component_1 = __webpack_require__(6);
	exports.Ng2MessagePopupComponent = ng2_message_popup_component_1.Ng2MessagePopupComponent;
	var ng2_popup_module_1 = __webpack_require__(7);
	exports.Ng2PopupModule = ng2_popup_module_1.Ng2PopupModule;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var ng2_overlay_1 = __webpack_require__(3);
	var Ng2PopupComponent = (function () {
	    function Ng2PopupComponent(componentResolver, overlayManager) {
	        this.componentResolver = componentResolver;
	        this.overlayManager = overlayManager;
	    }
	    Ng2PopupComponent.prototype.ngAfterViewInit = function () {
	        var overlayEl = this.marker.element.nativeElement.parentElement.parentElement;
	        var overlay = new ng2_overlay_1.Ng2Overlay(overlayEl, {
	            id: 'ng2-popup-overlay',
	            windowOverlay: true,
	            position: 'center center'
	        });
	        this.overlayManager.register(overlay);
	    };
	    Ng2PopupComponent.prototype.open = function (component, options) {
	        this.close();
	        this.opened = true;
	        this.classNames = options.classNames;
	        this.closeButton = options.closeButton;
	        var factory = this.componentResolver.resolveComponentFactory(component);
	        var componentRef = this.marker.createComponent(factory);
	        componentRef.instance.popupOptions = options;
	        componentRef.instance.popup = this;
	        this.overlayManager.open('ng2-popup-overlay', null); //(id, event)
	    };
	    Ng2PopupComponent.prototype.close = function () {
	        this.opened = false;
	        this.overlayManager.close('ng2-popup-overlay');
	        try {
	            this.marker.remove();
	        }
	        catch (e) { }
	    };
	    return Ng2PopupComponent;
	}());
	__decorate([
	    core_1.ViewChild('marker', { read: core_1.ViewContainerRef }),
	    __metadata("design:type", Object)
	], Ng2PopupComponent.prototype, "marker", void 0);
	Ng2PopupComponent = __decorate([
	    core_1.Component({
	        selector: 'ng2-popup',
	        directives: [ng2_overlay_1.Ng2OverlayDirective],
	        providers: [ng2_overlay_1.Ng2OverlayManager],
	        template: "\n    <div id=\"ng2-popup-overlay\"> <!-- <-- this is overlay -->\n      <div class=\"popup-container {{classNames}}\" [ngClass]=\"{opened: opened}\">\n        <div *ngIf=\"closeButton != false\" class=\"close-popup\" (click)=\"close()\">x</div>\n        <div class=\"marker\" #marker></div> <!-- to position popup component -->\n        <!-- popup component will be here -->\n      </div>\n    </div>\n  ",
	        styles: ["\n    .popup-container { \n      background: #fff;\n      border: 1px solid #ccc;\n      box-shadow: 0 5px 15px rgba(0,0,0,.5);\n      border-radius: 5px;\n      width: 600px;\n      display: none;\n    }\n    .popup-container.opened { \n      display: block;\n    }\n    .close-popup {\n      font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n      float: right; \n      cursor: pointer; \n      font-size: 21px;\n      line-height: 1;\n      text-shadow: 0 1px 0 #fff;\n      opacity: 0.2;\n      padding: 10px;\n    }\n    /*.marker ~ * { display:block; background: #fff}*/\n    .popup-container.small { width: 300px}\n    .popup-container.large { width: 900px}\n  "],
	        encapsulation: core_1.ViewEncapsulation.None
	    }),
	    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
	        ng2_overlay_1.Ng2OverlayManager])
	], Ng2PopupComponent);
	exports.Ng2PopupComponent = Ng2PopupComponent;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(2), __webpack_require__(4), __webpack_require__(5));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/forms", "@angular/common"], factory);
		else if(typeof exports === 'object')
			exports["ng2-overlay"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
		else
			root["ng2-overlay"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var ng2_overlay_1 = __webpack_require__(1);
		exports.Ng2Overlay = ng2_overlay_1.Ng2Overlay;
		var ng2_overlay_manager_1 = __webpack_require__(3);
		exports.Ng2OverlayManager = ng2_overlay_manager_1.Ng2OverlayManager;
		var ng2_overlay_directive_1 = __webpack_require__(5);
		exports.Ng2OverlayDirective = ng2_overlay_directive_1.Ng2OverlayDirective;
		var ng2_overlay_module_1 = __webpack_require__(6);
		exports.Ng2OverlayModule = ng2_overlay_module_1.Ng2OverlayModule;
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		var ng2_util_1 = __webpack_require__(2);
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
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
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
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(4);
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
		    Ng2OverlayManager = __decorate([
		        core_1.Injectable(), 
		        __metadata('design:paramtypes', [])
		    ], Ng2OverlayManager);
		    return Ng2OverlayManager;
		}());
		exports.Ng2OverlayManager = Ng2OverlayManager;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_4__;
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(4);
		var ng2_overlay_manager_1 = __webpack_require__(3);
		var ng2_overlay_1 = __webpack_require__(1);
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
		    __decorate([
		        core_1.Input('ng2-overlay-of'), 
		        __metadata('design:type', String)
		    ], Ng2OverlayDirective.prototype, "overlayOf", void 0);
		    __decorate([
		        core_1.Input('ng2-overlay-position'), 
		        __metadata('design:type', String)
		    ], Ng2OverlayDirective.prototype, "overlayPosition", void 0);
		    Ng2OverlayDirective = __decorate([
		        core_1.Directive({
		            selector: '[ng2-overlay], [ng2-overlay-of], [ng2-overlay-position]',
		        }), 
		        __metadata('design:paramtypes', [core_1.ViewContainerRef, ng2_overlay_manager_1.Ng2OverlayManager])
		    ], Ng2OverlayDirective);
		    return Ng2OverlayDirective;
		}());
		exports.Ng2OverlayDirective = Ng2OverlayDirective;
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
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
		var core_1 = __webpack_require__(4);
		var forms_1 = __webpack_require__(7);
		var common_1 = __webpack_require__(8);
		var ng2_overlay_manager_1 = __webpack_require__(3);
		var ng2_overlay_directive_1 = __webpack_require__(5);
		var Ng2OverlayModule = (function () {
		    function Ng2OverlayModule() {
		    }
		    Ng2OverlayModule = __decorate([
		        core_1.NgModule({
		            imports: [common_1.CommonModule, forms_1.FormsModule],
		            declarations: [ng2_overlay_directive_1.Ng2OverlayDirective],
		            providers: [ng2_overlay_manager_1.Ng2OverlayManager],
		            exports: [ng2_overlay_directive_1.Ng2OverlayDirective]
		        }), 
		        __metadata('design:paramtypes', [])
		    ], Ng2OverlayModule);
		    return Ng2OverlayModule;
		}());
		exports.Ng2OverlayModule = Ng2OverlayModule;
		;
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_7__;
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_8__;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=ng2-overlay.umd.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var Ng2MessagePopupComponent = (function () {
	    function Ng2MessagePopupComponent() {
	    }
	    return Ng2MessagePopupComponent;
	}());
	Ng2MessagePopupComponent = __decorate([
	    core_1.Component({
	        selector: 'ng2-message-popup',
	        template: "\n    <div>\n      <div class=\"popup-header\">{{popupOptions.title}}</div>\n      <div class=\"popup-body\">{{popupOptions.message}}</div>\n      <div class=\"popup-footer\" *ngIf=\"popupOptions.buttons\">\n        <button *ngIf=\"popupOptions.buttons.OK\"\n          (click)=\"popupOptions.buttons.OK()\">Ok</button>\n        <button *ngIf=\"popupOptions.buttons.CANCEL\"\n          (click)=\"popupOptions.buttons.CANCEL()\">Cancel</button>\n      </div>\n    </div>\n  ",
	        encapsulation: core_1.ViewEncapsulation.None,
	        styles: ["\n    .popup-header, .popup-body, .popup-footer {\n      padding: 15px;\n      text-align: center;\n    }\n    .popup-header  {\n      font-weight: bold;\n      font-size: 18px;\n      border-bottom: 1px solid #ccc;\n    }\n  "]
	    }),
	    __metadata("design:paramtypes", [])
	], Ng2MessagePopupComponent);
	exports.Ng2MessagePopupComponent = Ng2MessagePopupComponent;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(4);
	var common_1 = __webpack_require__(5);
	var ng2_overlay_1 = __webpack_require__(3);
	var ng2_popup_component_1 = __webpack_require__(1);
	exports.Ng2PopupComponent = ng2_popup_component_1.Ng2PopupComponent;
	var ng2_message_popup_component_1 = __webpack_require__(6);
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


/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-popup.umd.js.map