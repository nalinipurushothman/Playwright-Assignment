const { remote } = require('webdriverio');

(async () => {
  const browser = await remote({
    capabilities: {
      browserName: 'chrome' // Replace with your desired browser
    }
  });

  class BrowserActions {
    /**
     * Navigate to a specific URL
     * @param {string} url - The URL to navigate to
     */
    async openUrl(url) {
      await browser.url(url); // Use the provided 'url' parameter
    }
  }

  
  // Other actions or assertions can follow here

  await browser.deleteSession(); // Close the browser session when done
})();
