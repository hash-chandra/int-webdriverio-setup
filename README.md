# BOILERPLATE WEBDRIVERIO

## Installing/ Getting Started

Install the dependencies using `npm`:

```shell
npm install
```

## Style guide
    yet to configure eslint/prettier

## Tech Stack
    WebdriverIO - Test Framework
    Cucumber    - Test Runner
    
## Directory Layout

```bash
.
├── /                                         # root directory with project-wide configs and folders
├── /conf/                                    # Configurations related to framework & browser specific
│   ├── /wdio.conf.js                         # Global config file
│   ├── /wdio.conf.desktop.local.chrome.js    # Local Chrome Driver config
│   ├── /wdio.conf.desktop.local.firefox.js   # Local Firefox Driver config
│   ├── /wdio.conf.browserstack.js            # BrowserStack Global file
│   ├── /wdio.conf.browserstack.safari.js     # BrowserStack IOS Safari config
│   ├── /wdio.conf.browserstack.ios.safari.js # BrowserStack Web Safari config
├── /features/                                # Features folder
├── /pageObjects/                             # Page objects folder
├── /stepDefinitions/                         # Step Definitions folder
├── /package.json                             # Framework dependencies
```

## WebdriverIO Tests

In order to run the end-to-end WebdriverIO tests locally follow these steps:

Chrome browser use `npm run test:chrome`    
Firefox browser use `npm run test:firefox`   
BrowserStack - Web Safari browser use `npm run test:bs:safari`   
BrowserStack - Mobile Iphone browser use `npm run test:bs:ios`    