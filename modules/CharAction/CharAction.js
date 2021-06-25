const R = require('ramda');

const CharAction = {
  attack: () => {
    const calculateFitnessLoss = R.pipe(
      (max) => Math.random() * max,
      Math.floor,
    );

    const lostHp = calculateFitnessLoss(20);
    const lostStamina = calculateFitnessLoss(30);

    return {
      hp: R.negate(lostHp),
      stamina: R.negate(lostStamina),
      message: `I've killed a creature. I've lost ${lostHp} HP and ${lostStamina} stamina.`
    };
  },
  heal: () => {
    const calculateHpGain = R.pipe(
      (max) => Math.random() * max,
      Math.floor,
    );

    const gainedHp = calculateHpGain(20);

    return {
      hp: gainedHp,
      message: `I drank a healing potion. I've regained ${gainedHp} HP.`
    };
  },
  rest: () => {
    const calculateStaminaGain = R.pipe(
      (max) => Math.random() * max,
      Math.floor,
    );

    const gainedStamina = calculateStaminaGain(20);

    return {
      stamina: gainedStamina,
      message: `I've finally had a good night's sleep. I've regained ${gainedStamina} stamina.`
    };
  },
  idle: () => {
    return {
      message: 'I\'m idling at my camp.'
    };
  },
};

module.exports = { CharAction };
