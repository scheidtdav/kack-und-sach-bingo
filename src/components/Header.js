import React from "react";
import { Flex, Box, Image, Text } from "rebass";

import kacki from "../img/kacki.png";

export default function Header() {
  return (
    <Flex
      wrap="nowrap"
      justifyContent="center"
      alignContent="stretch"
      alignItems="center"
      mb={1}
    >
      <Box>
        <Image src={kacki} sx={{ maxHeight: "48px" }} alt="Kacki" />
      </Box>
      <Box verticalAlign="middle" p={2}>
        <Text variant="heading" color="primary" fontWeight="bold">
          Bingo
        </Text>
      </Box>
    </Flex>
  );
}
