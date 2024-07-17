const browserActions = require('../utils/browserActions');

class RetirementCalculatorPage {
    get currentAge() { return $('#current-age'); }
    get retirementAge() { return $('#retirement-age'); }
    get currentIncome() { return $('#current-income'); }
    get spouseIncome() { return $('#spouse-income'); }
    get currentSavings() { return $('#current-savings'); }
    get currentContribution() { return $('#current-contribution'); }
    get annualContributionIncrease() { return $('#annual-contribution-increase'); }
    get socialSecurityYes() { return $('#yes-social-security'); }
    get socialSecurityNo() { return $('#no-social-security'); }
    get relationshipStatus() { return $('#relationship-status'); }
    get socialSecurityOverride() { return $('#social-security-override'); }
    get additionalIncome() { return $('#additional-income'); }
    get retirementYears() { return $('#retirement-years'); }
    get postRetirementIncomeIncrease() { return $('#post-retirement-income-increase'); }
    get desiredIncome() { return $('#desired-income'); }
    get preRetirementReturn() { return $('#pre-retirement-return'); }
    get postRetirementReturn() { return $('#post-retirement-return'); }
    get calculateButton() { return $('button*=Calculate'); }
    get result() { return $('.results-header'); }
    get socialSecurityToggle() { return $('#social-security-toggle'); }
    get socialSecurityFields() { return $('#social-security-fields'); }
    get adjustDefaultValuesButton() { return $('button*=Adjust Default Values'); }

    fillForm(data) {
        browserActions.setValue(this.currentAge, data.currentAge);
        browserActions.setValue(this.retirementAge, data.retirementAge);
        browserActions.setValue(this.currentIncome, data.currentIncome);
        browserActions.setValue(this.spouseIncome, data.spouseIncome);
        browserActions.setValue(this.currentSavings, data.currentSavings);
        browserActions.setValue(this.currentContribution, data.currentContribution);
        browserActions.setValue(this.annualContributionIncrease, data.annualContributionIncrease);
        if (data.socialSecurity) {
            browserActions.clickElement(this.socialSecurityYes);
        } else {
            browserActions.clickElement(this.socialSecurityNo);
        }
        browserActions.selectDropdownByVisibleText(this.relationshipStatus, data.relationshipStatus);
        browserActions.setValue(this.socialSecurityOverride, data.socialSecurityOverride);
        browserActions.setValue(this.additionalIncome, data.additionalIncome);
        browserActions.setValue(this.retirementYears, data.retirementYears);
        if (data.postRetirementIncomeIncrease) browserActions.clickElement(this.postRetirementIncomeIncrease);
        browserActions.setValue(this.desiredIncome, data.desiredIncome);
        browserActions.setValue(this.preRetirementReturn, data.preRetirementReturn);
        browserActions.setValue(this.postRetirementReturn, data.postRetirementReturn);
    }

    submitForm() {
        browserActions.clickElement(this.calculateButton);
    }

    toggleSocialSecurity() {
        browserActions.clickElement(this.socialSecurityToggle);
    }

    isResultDisplayed() {
        return browserActions.isElementDisplayed(this.result);
    }

    adjustDefaultValues() {
        browserActions.clickElement(this.adjustDefaultValuesButton);
        return DefaultCalculatorValuesPage.isModalDisplayed();
    }
}

module.exports = new RetirementCalculatorPage();
