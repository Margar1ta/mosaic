import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DemoModule } from './module';


platformBrowserDynamic()
    .bootstrapModule(DemoModule)
    // eslint-disable-next-line no-console
    .catch((error) => console.error(error));

