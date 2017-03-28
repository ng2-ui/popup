import { ComponentFactoryResolver } from '@angular/core';
import { Ng2OverlayManager } from 'ng2-overlay';
export declare class NguiPopupComponent {
    private componentResolver;
    overlayManager: Ng2OverlayManager;
    marker: any;
    opened: boolean;
    closeButton: boolean;
    classNames: string;
    constructor(componentResolver: ComponentFactoryResolver, overlayManager: Ng2OverlayManager);
    ngAfterViewInit(): void;
    open(component: any, options: any): void;
    close(): void;
}
