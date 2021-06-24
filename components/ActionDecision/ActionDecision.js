const React = require('react');
const { Box, Text, Newline } = require('ink');

const ActionDecision = () => (
  <>
    <Box flexDirection="column">
      <Box>
        <Text>
          <Text>1) Attack</Text>
          <Newline />
          <Text>2) Use health potion</Text>
          <Newline />
          <Text>3) Rest</Text>
        </Text>
      </Box>
    </Box>
  </>
);

module.exports = ActionDecision;
