import {
    Attribute,
    ChangeDetectionStrategy,
    Component,
    Directive,
    ElementRef,
    ViewEncapsulation
} from '@angular/core';
import { mixinColor, CanColor, CanColorCtor, ThemePalette } from '@ptsecurity/mosaic/core';


@Directive({
    selector: '[mc-icon]',
    host: { class: 'mc mc-icon' }
})
// eslint-disable-next-line 
export class McIconCSSStyler {}


export class McIconBase {
    // eslint-disable-next-line 
    constructor(public _elementRef: ElementRef) {}
}

// eslint-disable-next-line 
export const McIconMixinBase: CanColorCtor & typeof McIconBase = mixinColor(McIconBase, ThemePalette.Empty);


@Component({
    selector: `[mc-icon]`,
    template: '<ng-content></ng-content>',
    styleUrls: ['icon.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    inputs: ['color']
})
export class McIcon extends McIconMixinBase implements CanColor {
    constructor(elementRef: ElementRef, @Attribute('mc-icon') iconName: string) {
        super(elementRef);

        if (iconName) {
            elementRef.nativeElement.classList.add(iconName);
        }
    }

    getHostElement() {
        return this._elementRef.nativeElement;
    }
}
