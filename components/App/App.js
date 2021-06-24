const { UserInput } = require('../../modules/UserInput/UserInput');
const React = require('react');
const { Box } = require('ink');
const importJsx = require('import-jsx');

const CharFitness = importJsx('../CharFitness/CharFitness');
const ActionReport = importJsx('../ActionReport/ActionReport');
const ActionDecision = importJsx('../ActionDecision/ActionDecision');

const { useState, useEffect } = React;

const App = ({ action }) => {
  const [message, setMessage] = useState('Loading ...');

  useEffect(() => {
    setMessage(UserInput.doAction(action));
  });

  return (
    <>
      <Box>
        <CharFitness health={50} stamina={50} />
      </Box>
      <Box marginTop="1">
        <ActionReport message={message} />
      </Box>
      <Box marginTop="1">
        <ActionDecision />
      </Box>
    </>
  );
};

module.exports = App;
