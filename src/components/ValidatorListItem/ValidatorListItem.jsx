import React from "react";
import {
  Avatar,
  Anchor,
  Box,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "grommet";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { VALIDATOR_ICON } from "../../utils/constants";

const votingPowerFix = (n) => {
  return (n / Math.pow(10, 6)).toFixed(0);
};

const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ranking = () => {
  let n = 1;
  for (let i = n; i >= n; i += 1) {
    console.log(n);
  }
};

export const ValidatorListItem = ({ validator }) => {
  const ICON = `${VALIDATOR_ICON}${validator.operator_address}.png`;
  return (
    <TableRow>
      <TableCell scope="row">
        <Text>{ranking}</Text>
      </TableCell>
      <TableCell>
        <Anchor as={Link} to={`/validators/${validator.operator_address}`}>
          <Box direction="row" align="center" gap="small">
            <Avatar src={ICON} />
            {validator.description.moniker}
          </Box>
        </Anchor>
      </TableCell>
      <TableCell scope="row">
        <Text>
          {numberWithCommas(votingPowerFix(validator.delegator_shares))}
        </Text>
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
