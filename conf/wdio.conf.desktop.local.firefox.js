// This file is used to run tests on Firefox locally.
import { config as configBase } from './wdio.conf.js';

export const config = {
  ...configBase,
  browserName: 'firefox',
  browserVersion: '120.0',
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'firefox',
      // marionette: true,
      'moz:firefoxOptions': {},
      },
    ],
  path: '/',
  screenshotPath: null,
  specs: ['../features/**/*.feature'],  //issue
//  specs: [...configBase.specs],
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'error',
  // The number of times to retry the entire spec file when it fails as a whole.
  specFileRetries: 0,
};
