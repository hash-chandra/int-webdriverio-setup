// This file is used to run tests on Chrome locally.
import { config as configBase } from './wdio.conf.js';
const name = 'chrome';

export const config = {
  ...configBase,
  browserName: name,
  browserVersion: '121.0',
  path: '/',
  capabilities: [
    {
      maxInstances: 1,
      browserName: name,
      // Use the following setting to run tests on Chrome mobile locally.
      // Useful for debugging.
      'goog:chromeOptions': {
        excludeSwitches: ['enable-automation'],
        //  mobileEmulation: {
        //     "deviceMetrics": { "width": 360, "height": 640, "pixelRatio": 3.0 },
        //     "userAgent": "Mozilla/5.0 (Linux; Android 9; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.62 Mobile Safari/537.36"
        //   }
      },
    },
  ],
  screenshotPath: null,
  specs: ['../features/**/*.feature'],  //issue
//  specs: [...configBase.specs],
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'error',
  // The number of times to retry the entire spec file when it fails as a whole.
  specFileRetries: 0,
};
