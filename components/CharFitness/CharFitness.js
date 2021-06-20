const React = require('react');
const { Text, Box, Newline, Spacer } = require('ink');
const ProgressBar = require('ink-progress-bar').default;

const CharFitness = ({ health, stamina }) => (
  <Box>
      <Text>
        Health: <Text color={ health > 50 ? "green" : "yellow" }>{ health } </Text>
        <Newline />
        Stamina: <Text color={ stamina > 50 ? "green" : "yellow" }>{ stamina }</Text>
      </Text>
  </Box>
);

module.exports = CharFitness;
