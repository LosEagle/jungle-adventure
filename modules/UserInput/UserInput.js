const { CharAction } = require('../CharAction/CharAction');

const R = require('ramda');

const UserInput = {
  doAction: R.cond([
    [R.equals(R.__, 0), CharAction.idle],
    [R.equals(R.__, 1), CharAction.attack],
    [R.equals(R.__, 2), CharAction.heal],
    [R.equals(R.__, 3), CharAction.rest],
    [R.T, CharAction.idle]
  ]),
};

module.exports = { UserInput };
