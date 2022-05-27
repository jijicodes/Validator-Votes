import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Spinner,
  Tag,
  NameValuePair,
  NameValueList,
} from "grommet";
import { DEXMOS_DOMAIN } from "../../utils/constants";
import { useParams } from "react-router-dom";
import {
  proposalStatusLabel,
  statusBackgroundColor,
} from "../../utils/constants";
import { ProposalTallyVote } from "../ProposalTallyVote/ProposalTallyVote";

export const ProposalProfile = () => {
  const { proposalId } = useParams();
  const detailedProposalsApi = `${DEXMOS_DOMAIN}/cosmos/gov/v1beta1/proposals/${proposalId}`;
  const [proposalDetail, setProposalDetail] = useState();
  console.log(proposalDetail);
  useEffect(() => {
    fetch(detailedProposalsApi)
      .then((res) => res.json())
      .then(setProposalDetail);
  }, []);
  if (proposalDetail === undefined) {
    return <Spinner size="large" />;
  }
  return (
    <Box pad="medium" direction="column" gap="large" background="white">
      <Box align="start">
        <Tag
          size="xsmall"
          background={statusBackgroundColor[proposalDetail.proposal.status]}
          value={proposalStatusLabel[proposalDetail.proposal.status]}
        />
      </Box>

      <Box direction="row" align="center" justify="around">
        <Text weight="bold">#{proposalDetail.proposal.proposal_id}</Text>
        <Heading size="small">{proposalDetail.proposal.content.title}</Heading>
      </Box>
      <Box>
        <ProposalTallyVote
          tallyValue={proposalDetail.proposal.final_tally_result}
        />
      </Box>
      <Box direction="column">
        <NameValueList>
          <NameValuePair name="Voting Begins">
            <Text>
              {proposalDetail.proposal.voting_start_time.slice(0, 10)}{" "}
              {proposalDetail.proposal.voting_start_time.slice(11, 16)}UTC
            </Text>
          </NameValuePair>
          <NameValuePair name="Voting Ends">
            <Text>
              {proposalDetail.proposal.voting_end_time.slice(0, 10)}{" "}
              {proposalDetail.proposal.voting_end_time.slice(11, 16)}UTC
            </Text>
          </NameValuePair>
        </NameValueList>
      </Box>
      <Box gap="xsmall" direction="column">
        <Heading size="xsmall">Description</Heading>
        <Text>{proposalDetail.proposal.content.description}</Text>
      </Box>
    </Box>
  );
};
