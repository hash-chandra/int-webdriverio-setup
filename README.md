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
│   ├── /wdio.conf.visualregression.js        # Visual Regression config
├── /features/                                # Features folder
├── /pageObjects/                             # Page objects folder
├── /stepDefinitions/                         # Step Definitions folder
├── /package.json                             # Framework dependencies
```

## WebdriverIO Tests

In order to run the end-to-end WebdriverIO tests locally follow these steps:

```bash 
Chrome browser                          npm run test:chrome   
Firefox browser                         npm run test:firefox  
BrowserStack Web Safari browser         npm run test:bs:safari  
BrowserStack Mobile Iphone browser      npm run test:bs:ios  
```

### Visual Tests

Using wdio visual service, we can compare the webpages, elements against baseline images

To run visual tests
```shell
npm run test:visual
```
