import { $ } from '@wdio/globals';
import openPage from './page.js';

const locators = {  
    username: '#username',
    password: '#password',
    submit: 'button[type="submit"]'
};

    async function getInputUsername() {
        return await $(locators.username);
    }

    async function getInputPassword() {
        return await $(locators.password);
    }

    async function  getBtnSubmit() {
        return await $(locators.submit);
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async function login(username, password) {
        await $(locators.username).setValue(username);
        await $(locators.password).setValue(password);
        await $(locators.submit).click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async function openLoginPage() {
        openPage('login');
    }

export { getInputUsername, getInputPassword, getBtnSubmit, openLoginPage, login };
