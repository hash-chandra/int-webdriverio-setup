// This file is used to run tests on Chrome locally.
import { config as configBase } from './wdio.conf.js';
const name = 'chrome';

export const config = {
  ...configBase,
  browserName: name,
  path: '/',
  capabilities: [
    {
      maxInstances: 1,
      browserName: name,
      // Use the following setting to run tests on Chrome mobile locally.
      // Useful for debugging.
      'goog:chromeOptions': {
        args: [
          'no-sandbox',
          'disable-infobars',
          'disable-extensions',
          'disable-dev-shm-usage',
          // Comment the following options to view the browser while running tests
          'disable-gpu',
          'headless',
        ],
      },
    },
  ],
  screenshotPath: null,
  specs: [...configBase.specs],
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'error',
  // The number of times to retry the entire spec file when it fails as a whole.
  specFileRetries: 0,
};
