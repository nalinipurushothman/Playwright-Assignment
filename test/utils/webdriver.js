const { remote } = require('webdriverio');

async function createDriver() {
    const driver = await remote({
        logLevel: 'info',
        capabilities: {
            browserName: 'chrome',
            'goog:chromeOptions': {
                // args: ['--headless'], // Uncomment to run tests in headless mode
            }
        }
    });
    return driver;
}

module.exports = {
    createDriver
};
