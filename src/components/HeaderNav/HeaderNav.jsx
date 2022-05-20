import React from "react";
import { Anchor, Box, Grommet, Nav, Header } from "grommet";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <Box display="flex" background="brand" pad="small">
      <Nav direction="row" justify="end">
        <Anchor as={Link} to="/">
          Home
        </Anchor>
        <Anchor as={Link} to="/validators">
          Validators
        </Anchor>
        <Anchor as={Link} to="/proposals">
          Proposals
        </Anchor>
      </Nav>
    </Box>
  );
};
