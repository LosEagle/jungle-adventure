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
    return 'I drank potion.';
  },
  rest: () => {
    return 'I\'m rested';
  },
  idle: () => {
    return {
      message: 'I\'m idling at my camp.'
    };
  },
};

module.exports = { CharAction };
