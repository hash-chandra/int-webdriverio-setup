import { Then } from '@cucumber/cucumber';

Then(/^I should see the Admin homepage screen$/, async () => {
    await browser.pause(5000);
    await expect(await browser.checkScreen('adminHomePage')).toEqual(0);
});