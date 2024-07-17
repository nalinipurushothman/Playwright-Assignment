const browserActions = require('../utils/browserActions');

class DefaultCalculatorValuesPage {
    get modal() { return $('#default-calculator-values-modal'); }
    get saveButton() { return $('#save-default-values'); }
    get cancelButton() { return $('#cancel-default-values'); }
    get inflationRate() { return $('#default-inflation-rate'); }
    get investmentReturn() { return $('#default-investment-return'); }
    get retirementYears() { return $('#default-retirement-years'); }

    isModalDisplayed() {
        return browserActions.isElementDisplayed(this.modal);
    }

    fillDefaultValues(data) {
        browserActions.setValue(this.inflationRate, data.inflationRate);
        browserActions.setValue(this.investmentReturn, data.investmentReturn);
        browserActions.setValue(this.retirementYears, data.retirementYears);
    }

    saveChanges() {
        browserActions.clickElement(this.saveButton);
    }

    cancelChanges() {
        browserActions.clickElement(this.cancelButton);
    }
}

module.exports = new DefaultCalculatorValuesPage();