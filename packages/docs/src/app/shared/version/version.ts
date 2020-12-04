/* eslint-disable @typescript-eslint/no-var-requires */
const packageJSON = require('../../../../../../package.json');


/** This version will be used in footer and stackblitz. */
export const mosaicVersion = packageJSON.version;

/** Version information with title and redirect url */
// eslint-disable-next-line 
export interface VersionInfo {
    url: string;
    title: string;
}
