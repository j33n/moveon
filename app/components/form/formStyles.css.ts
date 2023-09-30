import { style } from "@vanilla-extract/css";

export const formRoot = style({
  width: "100%",
});

export const formField = style({
  display: "grid",
  marginBottom: "10px",
});

export const formLabel = style({
  fontSize: "15px",
  fontWeight: "500",
  lineHeight: "35px",
  color: "rgba(0, 0, 0, 0.5)",
});

export const formMessage = style({
  fontSize: "13px",
  color: "rgba(255, 0, 0, 0.8)",
});

export const button = style({});

const inputStyles = {
  display: "inlineFlex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4px",
  fontSize: "1rem",
  color: "rgba(0, 0, 0, 0.8)",
  fontWeight: "700",
  border: "none",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  height: "2rem",
  padding: "0.5rem",
};

export const input = style(inputStyles);
export const textarea = style({
  ...inputStyles,
  minHeight: "4rem",
  padding: "0.5rem",
});

export const labelContainer = style({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
});
