import { DEXMOS_DOMAIN, KEPLR_DOMAIN } from "../utils/constants";

export const voteHistory = () => {
  const unspecifiedProposalsApi = `${DEXMOS_DOMAIN}/cosmos/gov/v1beta1/proposals?proposal_status=0&pagination.reverse=true`;
  const eachVoteForProposal = `${DEXMOS_DOMAIN}/osmosis/proposals/231/votes?limit=100&offset=0`;
  //   https://api.mintscan.io/v1

  fetch(unspecifiedProposalsApi)
    .then((res) => res.json())
    .then((v) => v.proposals);

  fetch(eachVoteForProposal)
    .then((res) => res.json())
    .then(console.log);
};
