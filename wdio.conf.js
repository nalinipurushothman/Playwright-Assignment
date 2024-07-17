exports.config = {
    runner: 'local',
    specs: [
        './tests/**/*.spec.js'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu']
        }
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 70000,
    connectionRetryTimeout: 900000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'jasmine',
    reporters: [
        'spec',
        ['mochawesome', {
            outputDir: './reports',
            outputFileFormat: function(opts) {
                return `results-${opts.cid}.${opts.capabilities}.json`
            }
        }]
    ]
    }
}

