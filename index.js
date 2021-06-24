const React = require('react');
const { render } = require('ink');
const inquirer = require('inquirer');

const importJsx = require('import-jsx');

const App = importJsx('./components/App/App');

render(React.createElement(App));

const run = () =>
  inquirer
    .prompt([{
      type: 'number',
      name: 'action',
      message: '> ',
    }])
    .then(({ action }) => {
      console.clear();
      render(React.createElement(App, { action }));

      run();
    });

run();
