import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MosaicDocsExample } from './app/mosaic-docs-example';
import { DemoMosaicModule } from './mosaic-module';
// eslint-disable-next-line import/no-unassigned-import
import './polyfills';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        DemoMosaicModule,
        ReactiveFormsModule
    ],
    entryComponents: [MosaicDocsExample],
    declarations: [MosaicDocsExample],
    bootstrap: [MosaicDocsExample],
    providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
