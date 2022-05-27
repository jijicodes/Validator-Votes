import React from "react";
import { Anchor, Box, Grommet, Nav, Header } from "grommet";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <Box display="flex" pad="medium">
      <Nav direction="row" justify="end">
        {/* <Anchor as={Link} to="/">
          Home
        </Anchor> */}
        <Box background="#fbe3e8" round pad="medium">
          {" "}
          <Anchor
            as={Link}
            to="/validators"
            color="black"
            weight="small"
            size="small"
          >
            Validators
          </Anchor>
        </Box>
        <Box background="#fbe3e8" round pad="medium">
          {" "}
          <Anchor
            as={Link}
            to="/proposals"
            color="black"
            weight="small"
            size="small"
          >
            Proposals
          </Anchor>
        </Box>
      </Nav>
    </Box>
  );
};
