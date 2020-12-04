import { Component } from '@angular/core';
import * as momentImported from 'moment';
// @ts-ignore
// eslint-disable-next-line no-duplicate-imports
import { default as _rollupMoment } from 'moment';


// eslint-disable-next-line
const moment = _rollupMoment || momentImported;
/**
 * @title Timepicker overview
 */
@Component({
    selector: 'timepicker-overview-example',
    templateUrl: 'timepicker-overview-example.html',
    styleUrls: ['timepicker-overview-example.css']
})
export class TimepickerOverviewExample {
    isDisabled = false;
    isIconVisible = true;
    moment = moment;

    value = this.moment();

    timeFormat = 'HH:mm';
}
