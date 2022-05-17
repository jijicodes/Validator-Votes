import React from 'react'
import { Avatar, Box } from "grommet";

export const ValidatorListItem = ({validator }) => {

  const VALIDATOR_ICON = `https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/osmosis/${validator.operator_address}.png`
  return (
      <Box direction='row'> 
        <Avatar src={VALIDATOR_ICON}/>
        <Box>{validator.description.moniker} </Box>
        {/* <Box>{validator.operator_address}</Box> */}
     </Box>
   
  )
}
