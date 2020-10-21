import React, { useState, useEffect } from "react";
import { Button, Box, Header, Heading, Image, Stack } from "grommet";
import { Cycle, CircleInformation } from "grommet-icons";

import kacki from "../img/kacki.png";
import InfoOverlay from "./InfoOverlay";

export default function AppHeader() {
  const [shouldReload, setShouldReload] = useState(false);
  const [shouldShowInfoPopup, setShouldShowInfoPopup] = useState(false);

  useEffect(() => {
    if (shouldReload) window.location.reload();
  }, [shouldReload]);

  const showInfoPopup = () => setShouldShowInfoPopup(true);
  const infoPopupDismissed = () => setShouldShowInfoPopup(false);

  return (
    <>
      <Header
        background="background"
        justify="center"
        pad={{ horizontal: "medium", vertical: "xsmall" }}
        elevation="xsmall"
        flex={false}
        style={{ zIndex: "1" }}
      >
        <Stack fill="horizontal" anchor="right">
          <Box direction="row" gap="small" justify="center" align="center">
            <Box height="xxsmall" width="xxsmall">
              <Image src={kacki} alt="Kacki" width="xxsmall" fit="contain" />
            </Box>
            <Heading level="3">Bingo</Heading>
          </Box>
          <Box direction="row" justify="end" alignSelf="center" gap="medium">
            <Button
              plain
              icon={<CircleInformation color="text" />}
              onClick={(e) => showInfoPopup()}
            />
            <Button
              plain
              icon={<Cycle color="text" />}
              onClick={(e) => setShouldReload(true)}
            />
          </Box>
        </Stack>
      </Header>
      {shouldShowInfoPopup && <InfoOverlay onDismiss={infoPopupDismissed} />}
    </>
  );
}
