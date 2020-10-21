import React from "react";
import { Layer, Box, Heading, Markdown, Paragraph, Anchor, Nav } from "grommet";
import { Close, Facebook, Instagram, Twitter, Youtube } from "grommet-icons";

export default function InfoOverlay({ onDismiss }) {
  return (
    <Layer
      animation="fadeIn"
      onClickOutside={() => onDismiss()}
      onEsc={() => onDismiss()}
    >
      <Box pad="medium">
        <Anchor icon={<Close />} onClick={() => onDismiss()} />
        <Heading textAlign="center">Kack & Sach Bingo</Heading>
        <Markdown>
          Dieses Bingo ist ein Fan-Projekt mit freundlicher Unterstützung der
          [Kack & Sachgeschichten](www.kackundsach.de). Vielen Dank für die
          unzähligen Stunden Spaß und die Unterstützung dieses Projekts!
        </Markdown>
        <Paragraph>Folgt den Kackis auf Social Media:</Paragraph>
        <Nav direction="row">
          <Anchor
            icon={<Facebook />}
            href="https://www.facebook.com/kackundsach/"
            hoverIndicator
          />
          <Anchor
            icon={<Instagram />}
            href="https://www.instagram.com/kackundsach/"
            hoverIndicator
          />
          <Anchor
            icon={<Twitter />}
            href="https://twitter.com/kackundsach"
            hoverIndicator
          />
          <Anchor
            icon={<Youtube />}
            href="https://www.youtube.com/channel/UCHVZoNOgTrt_f_OcaB24P-A"
            hoverIndicator
          />
        </Nav>
      </Box>
    </Layer>
  );
}
