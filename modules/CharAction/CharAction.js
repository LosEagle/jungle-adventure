const CharAction = {
  attack: () => {
    return 'I\'ve encountered a creature';
  },
  heal: () => {
    return 'I drank potion.';
  },
  rest: () => {
    return 'I\'m rested';
  },
  idle: () => {
    return 'I\'m idling at my camp.';
  },
};

module.exports = { CharAction };
