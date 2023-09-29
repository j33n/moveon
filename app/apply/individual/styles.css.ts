import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
});

export const formContainer = style({
  display: "flex",
  columnGap: "1rem",
  width: "100%",
  flexWrap: "wrap",
  margin: "auto"
});

export const formField = style({
  width: "calc(50% - 1rem)",
});
