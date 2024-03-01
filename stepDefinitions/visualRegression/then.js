import { Then } from '@cucumber/cucumber';

const locators = {
    dashboardPanel: "ul[class='oxd-main-menu']"
};

Then(/^I should see the Admin homepage screen$/, async () => {
    await browser.pause(5000);
    await expect(await browser.checkElement( await $(locators.dashboardPanel),'adminHomePage')).toEqual(0);
});