import { createTheme, style } from "@vanilla-extract/css";

// TODO: fix bug on theme props not reflecting
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
    xxl: "2rem",
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

// RESPONSIVE REFERENCE

// /* Small devices such as large phones (640px and up) */
// @media only screen and (min-width: 40em) {...}

// /* Medium devices such as tablets (768px and up) */
// @media only screen and (min-width: 48em) {...}

// /* Large devices such as laptops (1024px and up) */
// @media only screen and (min-width: 64em) {...}

// /* Largest devices such as desktops (1280px and up) */
// @media only screen and (min-width: 80em) {...}

export const body = style({
  backgroundColor: vars.color.brand,
  width: "100vw",
  height: "100vh",
});

export const main = style({
  display: "flex",
  minWidth: "100vw",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "only screen and (max-width: 40em)": {
      width: "100%",
    },
  },
});

export const content = style({
  backgroundColor: "#f4913e",
  color: vars.color.white,
  padding: "2rem",
  height: "50%",
  width: "100vw",
  margin: "0 2rem",
  borderRadius: "1rem",
  marginBottom: "2rem",

  "@media": {
    "only screen and (max-width: 40em)": {
      width: "80%",
      margin: "0 auto",
    },
    "only screen and (min-width: 40em)": {
      width: "70%",
    },
  },
});

export const container = style({
  padding: vars.space.lg,
});

// TODO: figure out why color variables are not working

export const heading = style({
  fontSize: "2.25rem",
  lineHeight: "2.5rem",
  fontWeight: "700",
});

export const logo = style({
  marginLeft: "1rem",
  padding: "1rem",
});

export const homeHeader = style({
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media": {
    "only screen and (max-width: 40em)": {
      width: "100%",
    },
  },
});

export const buttonContainer = style({
  marginTop: "2rem",
  alignItems: "center",
});

export const joinButton = style({
  padding: "2px",
  width: "200px",
});

export const logoHolder = style({
  width: "30%",
});

export const nav = style({
  display: "flex",
  width: "70%",
  alignItems: "center",
  columnGap: "1rem",
  justifyContent: "end",
  paddingRight: "2rem",

  "@media": {
    "only screen and (max-width: 48em)": {
      display: "none",
    },
  },
});

export const navMobile = style({
  display: "flex",
  width: "70%",
  justifyContent: "end",
  paddingRight: "2rem",

  "@media": {
    "only screen and (min-width: 48em)": {
      display: "none",
    },
  },
});

export const popoverTrigger = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "3rem",
  width: "3rem",
  borderRadius: "4px",
});

export const popoverContent = style({
  border: "1px solid #eee",
  display: "flex",
  flexDirection: "column",
  background: "#fff",
  fontFamily: "inherit",
  borderRadius: "4px",
  padding: "1rem",
  rowGap: "1rem",

  "@media": {
    "only screen and (min-width: 48em)": {
      display: "none",
    },
  },
});

export const mobileLink = style({
  width: "100%",
  fontFamily: "inherit",
  padding: "0.5rem",
  fontSize: "12px",
  borderRadius: "4px"
});

export const mobileMenuTrigger = style({
  height: "2rem",
  width: "2rem",
});
