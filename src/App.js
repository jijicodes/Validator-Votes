import { Box, Grommet, Text, Nav, Header } from "grommet";
import { useEffect, useState } from "react";
import { grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { customTheme } from "../src/customTheme";
import "./App.css";
import { ProposalProfile } from "../src/components/ProposalProfile/ProposalProfile";
import { ProposalListItem } from "./components/ProposalListItem/ProposalListItem";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import { ValidatorProfilePage } from "./components/ValidatorProfilePage/ValidatorProfilePage";
import { ValidatorIndexPage } from "./components/ValidatorIndexPage/ValidatorIndexPage";
import { DEXMOS_DOMAIN } from "../src/utils/constants";
import { voteHistory } from "./hooks/voteHistory";

function App() {
  const theme = deepMerge(grommet, customTheme);

  const [proposalList, setProposalList] = useState([]);
  const unspecifiedProposalsApi = `${DEXMOS_DOMAIN}/cosmos/gov/v1beta1/proposals?proposal_status=0&pagination.reverse=true`;

  useEffect(() => {
    fetch(unspecifiedProposalsApi)
      .then((res) => res.json())
      .then((v) => v.proposals)
      .then(setProposalList);
  }, []);

  useEffect(() => {
    voteHistory();
  }, []);
  console.log("proposal List", proposalList);

  return (
    <Grommet full theme={theme}>
      <Box>
        <Router>
          <HeaderNav />
          <Routes>
            <Route path="/"></Route>
            <Route
              path="/validators/:address"
              element={<ValidatorProfilePage />}
            ></Route>
            <Route path="/validators" element={<ValidatorIndexPage />}></Route>
            <Route
              path="/proposals/:address"
              element={<ProposalProfile />}
            ></Route>
            <Route
              path="/proposals"
              element={
                <Box gap="medium" pad="small">
                  {proposalList.map((proposal) => (
                    <Box key={proposal.proposal_id}>
                      <ProposalListItem proposal={proposal} />
                    </Box>
                  ))}
                </Box>
              }
            ></Route>
          </Routes>
        </Router>
      </Box>
    </Grommet>
  );
}

export default App;
