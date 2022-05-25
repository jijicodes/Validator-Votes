import React, { useEffect, useState } from "react";
import {
  Avatar,
  Anchor,
  Box,
  Nav,
  Text,
  NameValueList,
  NameValuePair,
  Spinner,
} from "grommet";
import { useParams } from "react-router-dom";
import { DEXMOS_DOMAIN, VALIDATOR_ICON } from "../../utils/constants";

const VAL_WALLET_ADDRESS = "osmo1clpqr4nrk4khgkxj78fcwwh6dl3uw4epasmvnj";

export const ValidatorProfilePage = () => {
  const { address } = useParams();
  const [validatorInfo, setValidatorInfo] = useState();
  const validatorInfoApi = `${DEXMOS_DOMAIN}/cosmos/staking/v1beta1/validators/${address}`;
  const ICON = `${VALIDATOR_ICON}${address}.png`;

  useEffect(() => {
    fetch(validatorInfoApi)
      .then((res) => res.json())
      .then(setValidatorInfo);
  }, []);

  if (validatorInfo === undefined) {
    return <Spinner size="large" />;
  }

  return (
    <Box>
      <Box
        fill
        direction="column"
        align="left"
        background="orange"
        width="70vw"
        margin="small"
      >
        <Box gap="small" pad="medium" direction="row" align="center">
          <Avatar src={ICON}></Avatar>
          {validatorInfo.validator.description.moniker}
        </Box>
        <Box>{validatorInfo.validator.description.details}</Box>
      </Box>
      <Box>
        <NameValueList>
          <NameValuePair name="website">
            <Anchor
              href={validatorInfo.validator.description.website}
              label={validatorInfo.validator.description.website}
            />
          </NameValuePair>
          <NameValuePair name="email">
            <Text color="text-strong">
              {validatorInfo.validator.description.security_contact}
            </Text>
          </NameValuePair>
        </NameValueList>
      </Box>
      <Box> </Box>

      <Box>{address}</Box>
    </Box>
  );
};
