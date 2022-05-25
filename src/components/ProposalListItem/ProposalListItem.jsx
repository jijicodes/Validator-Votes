import React from "react";
import { Anchor, Box, Tag, Text } from "grommet";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const proposalStatusLabel = {
  PROPOSAL_STATUS_PASSED: "PASSED",
  PROPOSAL_STATUS_VOTING_PERIOD: "BONDING PERIOD",
  PROPOSAL_STATUS_REJECTED: "REJECTED",
  PROPOSAL_STATUS_FAILED: "FAILED",
  PROPOSAL_STATUS_DEPOSIT_PERIOD: "DEPOSIT PERIOD",
  PROPOSAL_STATUS_UNSPECIFIED: "UNSPECIFIED",
};

const statusBackgroundColor = {
  PROPOSAL_STATUS_PASSED: "green",
  PROPOSAL_STATUS_VOTING_PERIOD: "gray",
  PROPOSAL_STATUS_REJECTED: "red",
  PROPOSAL_STATUS_FAILED: "red",
  PROPOSAL_STATUS_DEPOSIT_PERIOD: "white",
  PROPOSAL_STATUS_UNSPECIFIED: "white",
};

export const ProposalListItem = ({ proposal }) => {
  return (
    <Box border pad="medium" direction="column" gap="medium">
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
