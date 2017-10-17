# snippet: node + selenium + gemini for visual testing

Includes two visual checks against Rotten Tomatoes website.

Gemini: https://github.com/gemini-testing/gemini

## Setup
1. Type `npm install` to install dependencies.
2. Edit `.gemini.js` and review the webdriver config, by default it will use Chrome browser in headless mode.
3. If you don't have Selenium installed on your system, use `npm run setup-selenium` and `npm run start-selenium`.

## Test execution
Type `npm test` to execute the suite. One test should pass and one should fail, as the baseline screenshot was modified on purpose.

## Test report
An HTML report should be generated at the _reports_ dir, open it to see the diff of the failed visual check. The magnifying glass and the internal circle of the _R_ of the _Rotten_ word should be highlighted, though depending on the browser
you'll have to play with the tolerance value.

## Saucelabs
Using Saucelabs instead of a local browser is pretty straightforward, see the [gemini-sauce plugin](https://www.npmjs.com/package/gemini-sauce).
