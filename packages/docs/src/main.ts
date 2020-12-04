import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/';
import { environment } from './environments/environment';
// eslint-disable-next-line import/no-unassigned-import
import './polyfills.ts';
import { unregisterServiceWorkers } from './unregister-service-workers';


// Unregister all installed service workers and force reload the page if there was
// an old service worker from a previous version of the docs.
unregisterServiceWorkers()
    .then((hadServiceWorker) => hadServiceWorker && location.reload());

// eslint-disable-next-line
if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err));
