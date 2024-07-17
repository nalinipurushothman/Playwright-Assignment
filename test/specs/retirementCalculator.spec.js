const RetirementCalculatorPage = require('../pageobjects/RetirementCalculatorPage');
const DefaultCalculatorValuesPage = require('../pageobjects/DefaultCalculatorValuesPage');
const browserActions = require('../utils/browserActions');
const testData = require('../data/testData');

describe('Retirement Savings Calculator', () => {
    beforeAll(() => {
        browserActions.openUrl('https://www.securian.com/insights-tools/retirement-calculator.html');
    });

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
