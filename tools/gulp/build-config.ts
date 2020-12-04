
import { join, resolve } from 'path';


/* eslint-disable @typescript-eslint/no-var-requires */
const packageJSON = require('../../package.json');
/* eslint-enable @typescript-eslint/no-var-requires */

const angularVersion = packageJSON.requiredAngularVersion;

const rootDir = resolve(__dirname, '../..');

const buildConfig = {
    angularVersion,
    projectDir: rootDir,
    packagesDir: join(rootDir, 'packages'),
    outputDir: join(rootDir, 'dist')
};

export { buildConfig };
