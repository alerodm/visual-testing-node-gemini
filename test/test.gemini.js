gemini.suite('rotten-tomatoes-header-pass', (suite) => {
  suite.setUrl('/')
    .setCaptureElements('#header_brand_column')
    .capture('plain');
});

gemini.suite('rotten-tomatoes-header-fail', (suite) => {
  suite.setUrl('/')
    .setCaptureElements('#header_brand_column')
    .capture('plain')
    .setTolerance(7); // lower tolerance showed false-negatives on the diff
});

