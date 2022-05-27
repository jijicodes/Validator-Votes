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
  ResponsiveContext,
  Heading,
} from "grommet";
import { useParams } from "react-router-dom";
import { DEXMOS_DOMAIN, VALIDATOR_ICON } from "../../utils/constants";

const VAL_WALLET_ADDRESS = "osmo1clpqr4nrk4khgkxj78fcwwh6dl3uw4epasmvnj";

const votingPowerFix = (n) => {
  return (n / Math.pow(10, 6)).toFixed(0);
};
const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const ValidatorProfilePage = () => {
  const { address } = useParams();
  const [validatorInfo, setValidatorInfo] = useState();
  const validatorInfoApi = `${DEXMOS_DOMAIN}/cosmos/staking/v1beta1/validators/${address}`;
  const ICON = `${VALIDATOR_ICON}${address}.png`;
  const size = React.useContext(ResponsiveContext);
  useEffect(() => {
    fetch(validatorInfoApi)
      .then((res) => res.json())
      .then(setValidatorInfo);
  }, []);

  if (validatorInfo === undefined) {
    return <Spinner size="large" />;
  }

  return size === "small" ? (
    <Box>
      <Box>
        <Box gap="small" pad="medium" direction="row" align="center">
          <Avatar src={ICON}></Avatar>
          <Text weight="bold" size="large">
            {validatorInfo.validator.description.moniker}
          </Text>
        </Box>
        <Box pad="small" border={{ side: "bottom" }}>
          <Box direction="row" justify="evenly">
            <Box direction="column" align="center">
              <Text weight="bold">Voting Power</Text>
              <Box>
                {numberWithCommas(
                  votingPowerFix(validatorInfo.validator.delegator_shares)
                )}
              </Box>
            </Box>
            <Box direction="column" align="center">
              <Text weight="bold">Fee</Text>
              <Box>
                {(
                  validatorInfo.validator.commission.commission_rates.rate * 100
                ).toFixed(2)}
                %
              </Box>
            </Box>
            <Box direction="column" align="center">
              <Text weight="bold">Slash</Text>
              <Box>TBD</Box>
            </Box>
          </Box>
        </Box>
        <Box pad="medium">
          <NameValueList>
            <NameValuePair name="Address">
              <Text wordBreak="break-word">{address}</Text>
            </NameValuePair>
            <NameValuePair name="Website">
              <Anchor
                href={validatorInfo.validator.description.website}
                label={validatorInfo.validator.description.website}
              />
            </NameValuePair>
            <NameValuePair name="Email">
              <Text color="text-strong">
                {validatorInfo.validator.description.security_contact}
              </Text>
            </NameValuePair>
            <NameValuePair name="Description">
              {validatorInfo.validator.description.details}
            </NameValuePair>
          </NameValueList>
        </Box>
      </Box>
    </Box>
  ) : (
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

          <NameValuePair name="address">
            <Text color="text-strong">{address}</Text>
          </NameValuePair>
        </NameValueList>
      </Box>
    </Box>
  );
};
