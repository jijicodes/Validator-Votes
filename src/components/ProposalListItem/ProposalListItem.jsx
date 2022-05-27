import React from "react";
import { Anchor, Box, Tag, Text, ResponsiveContext } from "grommet";
import {
  proposalStatusLabel,
  statusBackgroundColor,
} from "../../utils/constants";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export const ProposalListItem = ({ proposal }) => {
  return (
    <Box pad="medium" direction="column" gap="medium" background="#ebf6f5">
      <Box gap="small" direction="row" justify="between">
        <Text weight="bold">#{proposal.proposal_id}</Text>
        <Tag
          size="xsmall"
          background={statusBackgroundColor[proposal.status]}
          value={proposalStatusLabel[proposal.status]}
        />
      </Box>
      <Text weight="bold" size="large">
        {proposal.content.title}
      </Text>
      <Box direction="row" justify="between">
        <Text>
          The voting ends on {proposal.voting_end_time.slice(0, 10)} at{" "}
          {proposal.voting_end_time.slice(11, 16)} UTC
        </Text>
        <Box>
          <Anchor as={Link} to={`/proposals/${proposal.proposal_id}`}>
            Detail
          </Anchor>
        </Box>
      </Box>
    </Box>
  );
};
