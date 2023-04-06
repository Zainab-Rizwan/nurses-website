import { createTheme } from "@mui/material";


export const colorTokens = {
    primary: {
      50: "#FFFFFF",
      100: "#E3E8E9",
      200: "#CCD4DF",
      300: "#81A3BF",
      400: "#5A6473",
      500: "#1A667A",
      600: "#112145",
      700: "#EAF0F9",
    },
  };

export const themeSettings = createTheme({
      palette: {
             primary: {
                light: colorTokens.primary[700],
                dark: colorTokens.primary[600],
                main: colorTokens.primary[500],
              },
              neutral: {
                dark: colorTokens.primary[400],
                main: colorTokens.primary[300],
                light: colorTokens.primary[200],
              },
              background: {
                default: colorTokens.primary[50],
                alt: colorTokens.primary[100],
              },
            },
      typography: {
        fontFamily: ["DM Sans", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
          fontSize: 40,
          fontWeight:700,
        },
        h2: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
          fontSize: 32,
          fontWeight:700,

        },
        h3: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
          fontSize: 24,
        },
        h3bold: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
          fontSize: 24,
          fontWeight:700,
        },
        h4: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
          fontSize: 20,
        },
        h4light: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
          fontSize: 18,
        },
        h4bold: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
          fontSize: 18,
          fontWeight:500,
        },
        h5: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
          fontSize: 16,
        },
        h5bold: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
          fontWeight:500,
          fontSize: 16,
        },
        h6bold: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
          fontWeight:500,
          fontSize: 14,
        },
        h6: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
          fontSize: 14,
          fontWeight:300,
        },
        h7: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
          fontSize: 11,
          fontWeight:300,
        },
        
      },
    },
  );
