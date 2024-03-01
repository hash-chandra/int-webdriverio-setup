import { join } from 'path';
import { config as configBase } from './wdio.conf.js';

/** @type {WebdriverIO.Config} */
export const config = {
  ...configBase,
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'error',
  specs: ['../features/visualRegression/*.feature'],
  exclude: [],
  maxInstances: 1,
  services: [
    [
      'visual',
      {
        autoSaveBaseline: true,
        baselineFolder: join(process.cwd(), './baselineScreenshots/'),
        blockOutStatusBar: true,
        blockOutToolBar: true,
        clearRuntimeFolder: false,
        formatImageName: '{tag}-{width}x{height}',
        screenshotPath: join(process.cwd(), 'tmp/'),
        savePerInstance: true,
      },
    ],
  ],
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--no-sandbox', 'disable-infobars', '--disable-dev-shm-usage', '--window-size=1920,1280'],
      },
    },
  ],
  reporters: ['spec' ],
};
