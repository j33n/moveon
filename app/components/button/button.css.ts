import { globalStyle, style } from "@vanilla-extract/css";

export const button = style({
  display: "flex",
  height: "2.5rem",
  touchAction: "none",
  userSelect: "none",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",
  whiteSpace: "nowrap",
  borderRadius: "0.5rem",
  borderStyle: "none",
  backgroundColor: "white",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  color: "#171a1c",
  textDecorationLine: "none",
  outlineWidth: "2px",
  outlineOffset: "2px",
  outlineColor: "#007acc",
  boxShadow:
    "inset 0 0 0 1px rgba(0,0,0,0.1) , inset 0 -1px 0 rgba(0,0,0,0.1) , 0 1px 1px rgba(0,0,0,0.1)",
  ":active": {
    transform: "scale(0.98)",
  },
  ":hover": {
    backgroundColor: "#f3f5f7",
  },
  "@media": {
    "(min-width: 640px)": {
      gap: "0.5rem",
    },
  },
  selectors: {
    "&:active[aria-expanded='true']": {
      transform: "scale(1)",
    },
    "&[aria-disabled='true']": {
      opacity: "0.5",
    },
    "&[aria-expanded='true']": {
      backgroundColor: "#f3f5f7",
    },
    "&[data-active]": {
      transform: "scale(0.98)",
    },
    "&[data-active][aria-expanded='true']": {
      transform: "scale(1)",
    },
    "&[data-focus-visible]": {
      outlineStyle: "solid",
    },
  },
});

globalStyle(`:is( ${button}:hover)`, {
  backgroundColor: "white",
});
