import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import { isLoggedin,login, openLoginPage } from '../pageObjects/orangeLoginPage.js';

Given(/^I am on the login page$/, async () => {
    await openLoginPage();
});

Then(/^I should see the Admin homepage$/, async () => {
    await expect(isLoggedin()).toBeTruthy();
});

When('I login with {string} and {string}', async (username, password) => {
    await login(username, password);
});
 