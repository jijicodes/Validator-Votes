import React from 'react'
import { Box, Grommet,  Nav, Header } from "grommet";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export const HeaderNav = () => {
  return (
   <Box display="flex" background="brand" pad="small">
        <Nav direction="row" justify='end'>
         <Link to="/">Home</Link>
            <Link  to="/validators">
              Validators
            </Link>
            <Link  to="/proposals">
              Proposals
            </Link>
        </Nav>
        </Box>      
    
  )
}
