import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    // PRIMARY COLORS
    brand: "#FFCC02",
    white: "#fff",
    neutralDark: "#4D4637",
    neutralLight: "#B4AA99",
    accentBright: "#00D9AD",
    accentDark: "#009F79",
    // SECONDARY COLORS
    /// INPUTS
    inputBorderColor: "#ccc",
    inputBorderFocusColor: "#00D9AD",
    inputBackgroundColor: "#fff",
    inputPlaceholderColor: "#aaa",
    inputTextColor: "#333",
    inputErrorColor: "#d9534f",
    /// BUTTONS
    btnPrimaryBg: "#FFCC02",
    btnPrimaryText: "#fff",
    btnSecondaryBg: "#B4AA99",
    btnSecondaryText: "#333",
    btnDisabledBg: "#eee",
    /// INFO
    successColor: "#4CAF50",
    warningColor: "#FFC107",
    errorColor: "#F44336",
  },
  space: {
    sm: "4px",
    md: "0.5rem",
    lg: "1rem",
    xl: "1.5rem",
    xxl: "1.5rem",
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontFamilySecondary: "'Open Sans', sans-serif",
    fontSize: {
      base: "1rem",
      sm: "0.875rem",
      md: "1.125rem",
      lg: "1.5rem",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    lineHeight: "1.5",
  },
  borderRadius: "4px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transitionSpeed: "0.3s",
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
});

export const body = style({
  display: "flex",
  backgroundColor: vars.color.brand,
});

export const main = style({
  display: "flex",
});

export const hero = style({
  backgroundColor: vars.color.brand,
  color: vars.color.white,
  padding: vars.space.lg,
});

export const container = style({
  padding: vars.space.lg,
});
