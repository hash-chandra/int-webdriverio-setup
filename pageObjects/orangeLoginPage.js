import openPage from './page.js';

const locators = {  
    dashboardLink: '//h6[normalize-space()=\'Dashboard\']',
    username: 'input[placeholder=\'Username\']',
    password: 'input[placeholder=\'Password\']',
    loginBtn: 'button[type=\'submit\']'
};

async function isLoggedin() {
    return await $(locators.dashboardLink).isDisplayed();
}

async function openLoginPage() {
    await openPage('');
}

async function login(username, password) {
    await $(locators.username).setValue(username);
    await $(locators.password).setValue(password);
    await $(locators.loginBtn).click();
}

export {  isLoggedin, openLoginPage, login };