const React = require('react');
const { Text } = require('ink');

const ActionReport = ({ message }) => (
  <Text>
    > { message }
  </Text>
);

module.exports = ActionReport;
