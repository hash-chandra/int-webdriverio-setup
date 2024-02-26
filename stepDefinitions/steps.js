import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import {login, openLoginPage } from '../pageObjects/loginPage.js';
import getFlashAlert from '../pageObjects/secure.page.js';

Given(/^I am on the login page$/, async () => {
    await openLoginPage();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(getFlashAlert()).toBeExisting();
    await expect(getFlashAlert()).toHaveText(expect.stringContaining(message));
});

