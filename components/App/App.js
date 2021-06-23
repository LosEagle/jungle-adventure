const React = require('react');
const { Box } = require('ink');
const importJsx = require('import-jsx');

const CharFitness = importJsx('../CharFitness/CharFitness');
const ActionReport = importJsx('../ActionReport/ActionReport');

const App = () => (
  <>
    <Box>
      <CharFitness health={50} stamina={50} />
    </Box>
    <Box marginTop="1">
      <ActionReport />
    </Box>
  </>
);

module.exports = App;