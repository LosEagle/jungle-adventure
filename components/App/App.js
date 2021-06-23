const React = require('react');
const { Box } = require('ink');
const importJsx = require('import-jsx');

const CharFitness = importJsx('../CharFitness/CharFitness');

const App = () => (
  <Box>
    <CharFitness health={50} stamina={50} />
  </Box>
);

module.exports = App;