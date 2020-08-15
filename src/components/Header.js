import React from "react";
import { Box, Button, Heading, Image } from "grommet";
import { Cycle } from "grommet-icons";

import kacki from "../img/kacki.png";

export default function Header() {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="background"
      pad={{ left: "small", right: "small", vertical: "medium" }}
      elevation="medium"
      style={{ zIndex: "1" }}
    >
      <Box>
        <Image src={kacki} alt="Kacki" />
      </Box>
      <Heading>Bingo</Heading>
      <Button icon={<Cycle />} />
    </Box>
  );
}
