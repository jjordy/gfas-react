import React from 'react'
import { configure, addDecorator } from "@storybook/react";
import { setDefaults } from "@storybook/addon-info";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { defaultTheme, boldAndLarge } from "../themes";
import { withKnobs } from "@storybook/addon-knobs";
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info'
const themes = [defaultTheme, boldAndLarge];
import { checkA11y } from "@storybook/addon-a11y";
import { Container, Segment, Header } from "@jjordy/layout";
import { withBackgrounds } from "@storybook/addon-backgrounds";
// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withInfo);
addDecorator(withThemesProvider(themes));
addDecorator(withKnobs);
addDecorator(withNotes);
addDecorator(checkA11y);
addDecorator(
  withBackgrounds([
    { name: 'White', value: '#FFF', default: true},
    { name: "stripe", value: '#f6f9fc' },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" }
  ])
);

addDecorator((s, { kind, story }) => (
  <Container p={2}>
    {s()}
  </Container>
));

setDefaults({
  inline: true
});

configure(loadStories, module);
