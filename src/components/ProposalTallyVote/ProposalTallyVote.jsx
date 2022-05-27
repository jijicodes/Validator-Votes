import React from "react";
import { Box, Meter, Text, Stack } from "grommet";
import { StopFill } from "grommet-icons";

const tallyPercent = () => {};

export const ProposalTallyVote = ({ tallyValue }) => {
  return (
    <Box gap="large">
      <Box alignSelf="center">
        <Stack anchor="bottom">
          <Meter
            round
            thickness="large"
            type="bar"
            values={[
              {
                value: Number(tallyValue.yes),
                color: "purple",
              },

              {
                value: Number(tallyValue.no),
                color: "red",
              },
              {
                value: Number(tallyValue.abstain),
                color: "gray",
              },
              {
                value: Number(tallyValue.no_with_veto),
                color: "blue",
              },
            ]}
          />
        </Stack>
      </Box>
      <Box direction="row" align="center" justify="center" gap="medium">
        <Box direction="row" gap="xsmall">
          <StopFill color="purple" />
          <Text> Yes</Text>
        </Box>
        <Box direction="row" gap="xsmall">
          <StopFill color="red" />
          <Text>No</Text>
        </Box>
        <Box direction="row" gap="xsmall">
          <StopFill color="gray" />
          <Text>Abstain</Text>
        </Box>
        <Box direction="row" gap="xsmall">
          <StopFill color="blue" />
          <Text>No with Veto</Text>
        </Box>
      </Box>
    </Box>
  );
};
