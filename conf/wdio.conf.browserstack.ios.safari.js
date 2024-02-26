import { config as configBase } from './wdio.conf.browserstack.js';

/** @type {WebdriverIO.Config} */
export const config = {
  ...configBase,
  capabilities: [
    {
      maxInstances: 1,
      os_version: '17',
      device: 'iPhone 15 Plus',
      real_mobile: 'true',
      browserName: 'iPhone',
      'browserstack.appium_version': '1.22.0',
      'browserstack.local': true,
    },
  ],
};
