import data from './locators/allLocators.json' with {type:"json"};

async function openPIM() {
    await $(data.addEmployee.PIMLink).waitForDisplayed();
    await $(data.addEmployee.PIMLink).click();
}

async function clickAddButton() {
    await  $(data.addEmployee.addButton).waitForDisplayed();
    await  $(data.addEmployee.addButton).click();
}

async function fillEmployeeDetails(firstName, LastName) {
    await  $(data.addEmployee.firstNameInput).setValue(firstName);
    await  $(data.addEmployee.lastNameInput).setValue(LastName);
}

async function submitDetails() {
    await  $(data.addEmployee.saveButton).click();
}

async function isEmployeeAdded() {
    await (await  $(data.addEmployee.employeeLabel)).waitForDisplayed();
   return  await  $(data.addEmployee.employeeLabel).getValue();

}

export { openPIM, clickAddButton, fillEmployeeDetails, submitDetails, isEmployeeAdded };