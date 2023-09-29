import { style } from "@vanilla-extract/css";

export const applyContainer = style({
  display: "flex",
  flexWrap: "wrap",
  rowGap: "1rem",
  columnGap: "1rem",
  alignItems: "center",
  justifyContent: "start",
});

export const cardContent = style({
  width: "calc((100% - 1rem) / 2)",
  cursor: "pointer",
  minHeight: "200px",

  "@media": {
    "only screen and (max-width: 48em)": {
      width: "100%",
      minHeight: "fit-content",
    },
  },
});

export const cardLink = style({
  display: "flex",
  textDecoration: "none",
});
