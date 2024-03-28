import openPage from './page.js';
import data from './locators/allLocators.json' with {type:"json"};

async function isLoggedin() {
    await $(data.orangeLogin.dashboardLink).waitForDisplayed();
   return (await $(data.orangeLogin.dashboardLink)).isDisplayed();
}

async function openLoginPage() {
    await openPage('');
}

async function login(username, password) {
    await $(data.orangeLogin.username).setValue(username); 
    await $(data.orangeLogin.password).setValue(password);
    await $(data.orangeLogin.loginBtn).click();
}

export {  isLoggedin, openLoginPage, login };