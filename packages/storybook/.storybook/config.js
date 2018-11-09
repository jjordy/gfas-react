import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { setDefaults } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { withNotes } from "@storybook/addon-notes";
import { withInfo } from "@storybook/addon-info";
import { checkA11y } from "@storybook/addon-a11y";
import { Box } from "@jjordy/layout";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyles";

const defaultTheme = {
  BASE_SIZE: 1.0,
  UNIT: "rem",
  rounded: true,
  lineHeight: 1.6,
  colors: {
    blue: "#004D71",
    green: "#94D500",
    yellow: "#F2DF00",
    teal: "#00BBB3",
    lightBlue: "#00A5CD",
    red: "#EF483D",
    orange: "#f26B3B",
    white: "#FFF",
    black: "#222",
    grey: "#6c757d",
    darkGrey: "#343a40",
    lightGrey: "#f8f9fa",
    primary: "#004D71",
    secondary: "#f8f9fa",
    success: "#94D500",
    error: "#EF483D",
    info: "#00A5CD"
  }
};

const req = require.context("../stories", true, /.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withInfo());
addDecorator(withKnobs);
addDecorator(withNotes);
addDecorator(checkA11y);
addDecorator(
  withBackgrounds([
    { name: "White", value: "#FFF", default: true },
    { name: "stripe", value: "#f6f9fc" },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" }
  ])
);

addDecorator((s, { kind, story }) => (
  <ThemeProvider theme={defaultTheme}>
    <div style={{ position: "inherit" }}>
      <GlobalStyle />
      <div style={{ marginTop: "2rem" }}>{s()}</div>
    </div>
  </ThemeProvider>
));

setDefaults({
  inline: false
});

configure(loadStories, module);
