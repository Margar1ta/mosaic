import { FocusMonitor } from '@angular/cdk/a11y';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ElementRef,
    Input,
    OnDestroy,
    ViewEncapsulation
} from '@angular/core';
import {
    CanColor,
    CanColorCtor,
    CanDisable,
    CanDisableCtor,
    HasTabIndex,
    HasTabIndexCtor,
    mixinColor,
    mixinDisabled,
    mixinTabIndex
} from '@ptsecurity/mosaic/core';


// Boilerplate for applying mixins to McTabNav.
/** @docs-private */
export class McTabNavBase {
    // eslint-disable-next-line 
    constructor(public _elementRef: ElementRef) {}
}
// eslint-disable-next-line 
export const McTabNavMixinBase: CanColorCtor &
    typeof McTabNavBase = mixinColor(McTabNavBase);

/**
 * Navigation component matching the styles of the tab group header.
 */
@Component({
    selector: '[mc-tab-nav-bar]',
    exportAs: 'mcTabNavBar, mcTabNav',
    inputs: ['color'],
    templateUrl: 'tab-nav-bar.html',
    styleUrls: ['tab-nav-bar.scss'],
    host: { class: 'mc-tab-nav-bar' },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class McTabNav extends McTabNavMixinBase implements CanColor {
    constructor(elementRef: ElementRef) {
        super(elementRef);
    }
 }

// Boilerplate for applying mixins to McTabLink.
export class McTabLinkBase {}
// eslint-disable-next-line 
export const McTabLinkMixinBase: HasTabIndexCtor & CanDisableCtor &
    typeof McTabLinkBase = mixinTabIndex(mixinDisabled(McTabLinkBase));

/**
 * Link inside of a `mc-tab-nav-bar`.
 */
@Directive({
    selector: '[mc-tab-link], [mcTabLink]',
    exportAs: 'mcTabLink',
    inputs: ['disabled', 'tabIndex'],
    host: {
        class: 'mc-tab-link',
        '[attr.aria-current]': 'active',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.tabindex]': 'tabIndex',
        '[class.mc-disabled]': 'disabled',
        '[class.mc-active]': 'active'
    }
})
export class McTabLink extends McTabLinkMixinBase
    implements OnDestroy, CanDisable, HasTabIndex {
    /** Whether the link is active. */
    @Input()
    get active(): boolean {
        return this.isActive;
    }
    set active(value: boolean) {
        if (value !== this.isActive) {
            this.isActive = value;
        }
    }

    /** Whether the tab link is active or not. */
    protected isActive: boolean = false;

    constructor(public elementRef: ElementRef, private focusMonitor: FocusMonitor) {
        super();

        this.focusMonitor.monitor(this.elementRef.nativeElement);
    }

    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef.nativeElement);
    }
}
