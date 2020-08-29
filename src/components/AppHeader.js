import React from "react";
import { Button, Box, Header, Heading, Image, Stack } from "grommet";
import { Cycle } from "grommet-icons";

import kacki from "../img/kacki.png";

export default function AppHeader() {
  return (
    <Header
      background="background"
      justify="center"
      pad={{ left: "small", right: "small", vertical: "small" }}
      elevation="xxsmall"
      style={{ zIndex: "1" }}
    >
      <Stack fill="horizontal" anchor="right">
        <Box direction="row" gap="small" justify="center" align="center">
          <Box height="xxsmall" width="xxsmall">
            <Image src={kacki} alt="Kacki" width="xxsmall" fit="contain" />
          </Box>
          <Heading level="3">Bingo</Heading>
        </Box>
        <Box direction="row" justify="end" alignSelf="center">
          <Button plain icon={<Cycle color="text" />} />
        </Box>
      </Stack>
    </Header>
  );
}
