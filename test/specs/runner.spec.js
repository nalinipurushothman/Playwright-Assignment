const { createDriver } = require('../utils/webdriver');
const retirementcalc = require('../pageobjects/RetirementCalculatorPage');
const browserActions = require('../utils/browserActions');
const { remote } = require('webdriverio');

describe('Runner Retirement Calculator Test Suite', () => {
    let driver;

    beforeAll(async () => {
        driver = await createDriver();
    });

   afterAll(async () => {
       await driver.quit();
   });

    it('should perform a sample test', async () => {
        const browser = await remote({
            capabilities: {
                browserName: 'chrome' // Replace with your desired browser
            }
        });

        await browser.url('https://www.securian.com/insights-tools/retirement-calculator.html');
        await retirementcalc.adjustDefaultValues(driver);
        await retirementcalc.handlePopup(driver);
        const result = await retirementcalc.getCalculatorResult(driver);
        expect(result).toBe('Expected Result');

        await browser.deleteSession(); // Clean up the browser session

        it('should submit form with all required fields filled in', async () => {
            await RetirementCalculatorPage.fillForm(testData.retirementForm);
            await RetirementCalculatorPage.submitForm();
            const isResultDisplayed = await RetirementCalculatorPage.isResultDisplayed();
            expect(isResultDisplayed).toBe(true);
        });
       
        it('should show/hide additional Social Security fields based on toggle', async () => {
            await RetirementCalculatorPage.toggleSocialSecurity();
            const isSocialSecurityFieldsDisplayed = await RetirementCalculatorPage.socialSecurityFields.isDisplayed();
            expect(isSocialSecurityFieldsDisplayed).toBe(true);
            await RetirementCalculatorPage.toggleSocialSecurity();
            expect(await RetirementCalculatorPage.socialSecurityFields.isDisplayed()).toBe(false);
        });
    
        it('should adjust default values', async () => {
            await RetirementCalculatorPage.adjustDefaultValues();
            const isModalDisplayed = await DefaultCalculatorValuesPage.isModalDisplayed();
            expect(isModalDisplayed).toBe(true);
            await DefaultCalculatorValuesPage.fillDefaultValues(testData.defaultValues);
            await DefaultCalculatorValuesPage.saveChanges();
            const isModalClosed = await DefaultCalculatorValuesPage.isModalDisplayed();
            expect(isModalClosed).toBe(false);
        });
    });
});
