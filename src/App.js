import { Box, Grommet, Text, Nav, Header } from "grommet";
import { useEffect, useState } from "react";
import "./App.css";
import { ValidatorListItem } from "../src/components/ValidatorListItem/ValidatorListItem";
import { ProposalListItem } from "./components/ProposalListItem/ProposalListItem";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";

function App() {
  const [validatorList, setValidatorList] = useState([]);
  const [proposalList, setProposalList] = useState([]);
  const KEPLR_DOMAIN = "https://lcd-osmosis.keplr.app";
  const validatorsApi = `${KEPLR_DOMAIN}/staking/validators`;
  const unspecifiedProposalsApi = `${KEPLR_DOMAIN}/cosmos/gov/v1beta1/proposals?proposal_status=0&pagination.reverse=true`;

  useEffect(() => {
    fetch(unspecifiedProposalsApi)
      .then((res) => res.json())
      .then((v) => v.proposals)
      .then(setProposalList);

    fetch(validatorsApi)
      .then((res) => res.json())
      .then((a) => a.result)
      .then(setValidatorList);
  }, []);
  console.log(validatorList);

  return (
    <Grommet>
      <Box>
        <Router>
          <HeaderNav />
          <Routes>
            <Route path="/"></Route>
            <Route
              path="/validators"
              element={
                <Box>
                  {validatorList.map((validator) => (
                    <Box key={validator.description.moniker}>
                      <ValidatorListItem validator={validator} />
                    </Box>
                  ))}
                </Box>
              }
            ></Route>
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
