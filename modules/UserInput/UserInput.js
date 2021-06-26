const { CharAction } = require('../CharAction/CharAction');

const R = require('ramda');

const UserInput = {
  doAction: () => ({
    hp: 0,
    stamina: 0,
    message: 'Eh?'
  }),
};

module.exports = { UserInput };
