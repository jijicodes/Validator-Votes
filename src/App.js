import { Box, Grommet, Text, Nav, Header } from "grommet";
import { useEffect, useState } from "react";
import "./App.css";
import { ProposalListItem } from "./components/ProposalListItem/ProposalListItem";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import { ValidatorProfilePage } from "./components/ValidatorProfilePage/ValidatorProfilePage";
import { ValidatorIndexPage } from "./components/ValidatorIndexPage/ValidatorIndexPage";

function App() {
  const [proposalList, setProposalList] = useState([]);
  const KEPLR_DOMAIN = "https://lcd-osmosis.keplr.app";
  const unspecifiedProposalsApi = `${KEPLR_DOMAIN}/cosmos/gov/v1beta1/proposals?proposal_status=0&pagination.reverse=true`;

  useEffect(() => {
    fetch(unspecifiedProposalsApi)
      .then((res) => res.json())
      .then((v) => v.proposals)
      .then(setProposalList);
  }, []);

  return (
    <Grommet>
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
              path="/proposals"
              element={
                <Box>
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
