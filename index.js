const React = require('react');
const { render, Color } = require('ink');
const importJsx = require('import-jsx');

const App = importJsx('./components/App/App');

render(React.createElement(App));
