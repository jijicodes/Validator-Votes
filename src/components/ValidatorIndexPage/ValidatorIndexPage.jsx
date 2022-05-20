import React from "react";
import {
  Avatar,
  Anchor,
  Box,
  Nav,
  Table,
  TableHeader,
  TableRow,
  TableCell,
} from "grommet";
import { useEffect, useState } from "react";
import { ValidatorListItem } from "../ValidatorListItem/ValidatorListItem";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { KEPLR_DOMAIN } from "../../utils/constants";
export const ValidatorIndexPage = () => {
  const [validatorList, setValidatorList] = useState([]);
  const validatorsListApi = `${KEPLR_DOMAIN}/staking/validators`;
  useEffect(() => {
    fetch(validatorsListApi)
      .then((res) => res.json())
      .then((a) => a.result)
      .then((vs) =>
        vs.sort(
          (prev, current) => current.delegator_shares - prev.delegator_shares
        )
      )
      .then(setValidatorList);
  }, []);
  console.log("sort");
  return (
    <Box>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              Rank
            </TableCell>
            <TableCell scope="col" border="bottom">
              Validator
            </TableCell>
            <TableCell scope="col" border="bottom">
              Voting Power
            </TableCell>
            <TableCell scope="col" border="bottom">
              Cumulative Share
            </TableCell>
            <TableCell scope="col" border="bottom">
              Commision Fee
            </TableCell>
          </TableRow>
        </TableHeader>

        {validatorList.map((validator, index) => (
          <ValidatorListItem validator={validator} rank={index + 1} />
        ))}
      </Table>
    </Box>
  );
};
