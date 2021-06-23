const React = require('react');
const { Box, Text, Newline } = require('ink');
const importJsx = require('import-jsx');

const ActionInput = importJsx('../ActionInput/ActionInput');

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
      <Box marginTop="1">
        <ActionInput />
      </Box>
    </Box>
  </>
);

module.exports = ActionDecision;
