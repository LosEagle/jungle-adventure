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
  const [hp, setHpState] = useState(100);
  const [stamina, setStaminaState] = useState(100);

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
    const isHpAffected = R.prop('hp')(actionResult);
    const isStaminaAffected = R.prop('stamina')(actionResult);
    const isHpValid = R.lte(R.path(['hp'], actionResult), 100);
    const isStaminaValid = R.lte(R.path(['stamina'], actionResult), 100);

    const shouldChangeHp = () => R.and(isHpAffected, isHpValid);
    const shouldChangeStamina = () => R.and(isStaminaAffected, isStaminaValid);
    const shouldChangeBoth = () => R.and(shouldChangeHp(), shouldChangeStamina());
    const setHp = (changedHp) => setHpState(changedHp);
    const setStamina = (changedStamina) => setStaminaState(changedStamina);

    R.cond([
      [
        shouldChangeBoth,
        (actionResult) => {
          setHp(hp + actionResult.hp);
          setStamina(stamina + actionResult.stamina);
        }
      ],
      [shouldChangeHp, (actionResult) => setHpState(hp + actionResult.hp)],
      [shouldChangeStamina, (actionResult) => setStaminaState(stamina + actionResult.stamina)]
    ])(actionResult);

    setMessage(actionResult.message);
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
