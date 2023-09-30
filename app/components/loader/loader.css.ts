import { style } from "@vanilla-extract/css";

export const loaderContainer = style({
  position: "fixed",
  display: "block",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: 2,
  cursor: "pointer",
});

export const loader = style({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, 50%)",
});
