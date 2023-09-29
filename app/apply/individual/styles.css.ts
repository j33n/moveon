import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
});

export const formRoot = style({
  width: "260px",
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
  color: "white",
  opacity: "0.8",
});

export const input = style({});

export const button = style({});

// export const textarea = style({
//     ...input,
// });

export const textarea = style({
  selectors: {
    [`${input} &`]: {
      width: "100%",
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
      padding: "0 0.5rem",
    },
  },
});
