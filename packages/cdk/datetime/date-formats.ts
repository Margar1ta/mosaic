import { InjectionToken } from '@angular/core';


// eslint-disable-next-line
export interface McDateFormats {
    parse: {
        dateInput: any;
    };
    display: {
        dateInput: any;
        monthYearLabel: any;
        dateA11yLabel: any;
        monthYearA11yLabel: any;
    };
}

export const MC_DATE_FORMATS = new InjectionToken<McDateFormats>('mc-date-formats');
