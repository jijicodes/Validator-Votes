import React from "react";
import {
  Avatar,
  Anchor,
  Box,
  Text,
  TableRow,
  TableCell,
  TableBody,
  ResponsiveContext,
} from "grommet";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  DEXMOS_DOMAIN,
  KEPLR_DOMAIN,
  VALIDATOR_ICON,
} from "../../utils/constants";

const votingPowerFix = (n) => {
  return (n / Math.pow(10, 6)).toFixed(0);
};
const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const VAL_WALLET_ADDRESS = "osmo1clpqr4nrk4khgkxj78fcwwh6dl3uw4epasmvnj";

export const ValidatorListItem = ({ validator, rank }) => {
  const size = React.useContext(ResponsiveContext);
  const ICON = `${VALIDATOR_ICON}${validator.operator_address}.png`;

  return size === "small" ? (
    <Box pad="small">
      <Box direction="rows" align="center" gap="medium" pad="small" border>
        <Box pad={{ left: "large" }}>
          <Text weight="bold" color="black">
            #{rank}
          </Text>
        </Box>
        <Avatar src={ICON} />
        <Anchor as={Link} to={`/validators/${validator.operator_address}`}>
          {validator.description.moniker}
        </Anchor>
      </Box>
    </Box>
  ) : (
    <TableRow>
      <TableCell scope="row">
        <Box align="center">{rank}</Box>
      </TableCell>
      <TableCell>
        <Box direction="row" align="center" gap="small" margin="none">
          <Avatar src={ICON} />
          <Anchor as={Link} to={`/validators/${validator.operator_address}`}>
            {validator.description.moniker}
          </Anchor>
        </Box>
      </TableCell>
      <TableCell scope="row">
        <Text>TBD</Text>
      </TableCell>
      <TableCell scope="row">
        <Text>
          {numberWithCommas(votingPowerFix(validator.delegator_shares))}
        </Text>
      </TableCell>

      <TableCell scope="row">
        <Text>
          {(validator.commission.commission_rates.rate * 100).toFixed(2)}%
        </Text>
      </TableCell>
    </TableRow>
  );
};
