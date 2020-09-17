import React from "react";
import styled from "styled-components";
import { Box, Stack, Text } from "grommet";

const WrapBox = styled(Box)`
  border-radius: 5px;
`;
const StrikeThroughText = styled(Text)`
  text-decoration: line-through;
`;

export default function GameboardCell({
  row,
  column,
  isChecked,
  onChanged,
  children,
}) {
  return (
    <WrapBox
      onClick={() => onChanged(row, column)}
      align="center"
      justify="center"
      border={{ color: "text" }}
    >
      {isChecked ? (
        <Stack anchor="center">
          <Box>
            <StrikeThroughText
              color="text-weak"
              textAlign="center"
              wordBreak="break-word"
            >
              {children}
            </StrikeThroughText>
          </Box>
          <Box>
            <Text textAlign="center" size="xxlarge">
              <span role="img" aria-label="pile of poo">
                💩
              </span>
            </Text>
          </Box>
        </Stack>
      ) : (
        <Text textAlign="center" wordBreak="break-word">
          {children}
        </Text>
      )}
    </WrapBox>
  );
}
