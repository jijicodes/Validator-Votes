import React from 'react'
import { Box,Tag,Text } from "grommet";

const proposalStatusLabel = {
  "PROPOSAL_STATUS_PASSED" : "PASSED",
  "PROPOSAL_STATUS_VOTING_PERIOD" :"BONDING PERIOD",
  "PROPOSAL_STATUS_REJECTED": "REJECTED",
  "PROPOSAL_STATUS_FAILED": "FAILED",
  "PROPOSAL_STATUS_DEPOSIT_PERIOD": "DEPOSIT PERIOD",
  "PROPOSAL_STATUS_UNSPECIFIED": "UNSPECIFIED"
}
export const ProposalListItem = ({proposal}) => {
  
  return (
   <Box>
     <Box>#{proposal.proposal_id} {proposal.content.title}</Box>
    
    
  <Tag value={proposalStatusLabel[proposal.status]} />
   </Box>
  )
}
