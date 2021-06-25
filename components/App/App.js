const { UserInput } = require('../../modules/UserInput/UserInput');
const { Application } = require('../../modules/Application/Application')
const React = require('react');
const { Box, useInput } = require('ink');
const importJsx = require('import-jsx');
const R = require('ramda');

const CharFitness = importJsx('../CharFitness/CharFitness');
const ActionReport = importJsx('../ActionReport/ActionReport');
const ActionDecision = importJsx('../ActionDecision/ActionDecision');

const { useState, useEffect } = React;

const App = () => {
  const [message, setMessage] = useState('Loading ...');
  const [hp, setHp] = useState(100);
  const [stamina, setStamina] = useState(100);

  useEffect(() => {
    Application.keepAlive();
  }, [])

  useEffect(() => {
    R.ifElse(
      R.lte(R.__, 0),
      async () => {
        await setMessage('I\'m dead.');
        Application.exit();
      },
      R.F,
    )(hp);
  }, [hp]);

  useEffect(() => {
    R.ifElse(
      R.lte(R.__, 0),
      async () => {
        await setMessage('I\'m exhausted.');
        Application.exit();
      },
      R.F,
    )(stamina);
  }, [stamina]);

  useInput((input) => {
    const actionResult = UserInput.doAction(Number(input));

    setMessage(actionResult.message);
    R.ifElse(R.prop('hp'), () => setHp(hp + actionResult.hp), R.F)(actionResult);
    R.ifElse(R.prop('stamina'), () => setStamina(stamina + actionResult.stamina), R.F)(actionResult);
  });

  return (
    <>
      <Box>
        <CharFitness health={ hp } stamina={ stamina } />
      </Box>
      <Box marginTop="1">
        <ActionReport message={ message } />
      </Box>
      <Box marginTop="1">
        <ActionDecision />
      </Box>
    </>
  );
};

module.exports = App;
