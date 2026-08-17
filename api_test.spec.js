const { test, expect } = require('@playwright/test');

const employeedata = require('../test_data/employeedata.json');

test('Verify employee details', async () => {

    const employee = employeedata.employee;

    // A. Find second mobile number
    const secondMobileNumber = employee.mobileNumbers[1];

    console.log('Second Mobile Number:', secondMobileNumber);

    // B. Verify employee has API skill
    expect(employee.skills).toContain('API');

});