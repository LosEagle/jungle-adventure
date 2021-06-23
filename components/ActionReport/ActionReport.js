const React = require('react');
const { Text, Box, Newline, Spacer } = require('ink');

const ActionReport = ({ message }) => (
  <Text>
    > { message || "I'm idling at my camp." }
  </Text>
);

module.exports = ActionReport;
