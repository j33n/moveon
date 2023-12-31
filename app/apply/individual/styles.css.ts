import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
});

export const formContainer = style({
  display: "flex",
  columnGap: "1rem",
  width: "100%",
  flexWrap: "wrap",
  margin: "auto",

  "@media": {
    "only screen and (max-width: 48em)": {
      flexDirection: "column",
      width: "100%",
    },
  },
});

export const formField = style({
  width: "calc(50% - 1rem)",

  "@media": {
    "only screen and (max-width: 48em)": {
      width: "100%",
    },
  },
});

export const tabsTrigger = style({
  selectors: {
    '&[data-state="active"]::before': {
      background: "#f4913e",
    },
  },
});

export const tabsHeadingText = style({
  fontWeight: 700,
});
