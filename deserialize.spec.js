const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test('Verify employee details', async () => {

    // 1. Read the JSON file
    const jsonData = fs.readFileSync(
        path.join(__dirname, '../test_data/employeedata.json'),
        'utf-8'
    );

    // 2. Deserialize JSON into JavaScript object
    const employeedata = JSON.parse(jsonData);

    // 3. Get employee object
    const employee = employeedata.employee;

    // A. Find second mobile number
    const secondMobileNumber = employee.mobileNumbers[1];

    console.log('Second Mobile Number:', secondMobileNumber);

    // B. Verify employee has API skill
    expect(employee.skills).toContain('API');
});