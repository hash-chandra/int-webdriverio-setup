import { config as configBase } from './wdio.conf.js';

/** @type {WebdriverIO.Config} */
export const config = {
  ...configBase,
  user: 'chandrashekharch2',
  key: 'dX7nkGdWR5chxx9jzuWX',
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      {
        browserstackLocal: true,
      },
    ],
  ],
  commonCapabilities: {
    'bstack:options': {
      projectName: 'int-webdriverio-setup',
      buildName: 'int-webdriverio-setup-build',
      sessionName: 'int-webdriverio-setup-session',
      debug: true,
      networkLogs: true,
    },
  },
  specs: [...configBase.specs],
  maxInstances: 10,
};
