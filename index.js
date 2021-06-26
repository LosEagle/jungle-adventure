const React = require('react');
const { render } = require('ink');

const importJsx = require('import-jsx');

const App = importJsx('./components/App/App');

render(React.createElement(App));
