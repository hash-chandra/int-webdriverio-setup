import { config as configBase } from './wdio.conf.browserstack.js';

/** @type {WebdriverIO.Config} */
export const config = {
  ...configBase,
  capabilities: [
    {
      maxInstances: 1,
      os: 'OS X',
      os_version: 'Ventura',
      browser: 'Safari',
      browser_version: 'latest',
      browserName: 'Safari',
      resolution: '1024x768',
    },
  ],
};
