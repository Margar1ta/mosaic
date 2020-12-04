import { createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';

import { packager } from './build';
import { IPackagerOptions } from './schema';


// eslint-disable-next-line import/no-default-export
export default createBuilder<IPackagerOptions & JsonObject>(packager);
