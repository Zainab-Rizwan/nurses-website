import { createTheme } from "@mui/material";


export const colorTokens = {
    primary: {
      50: "#FFFFFF",
      100: "#E3E8E9",
      200: "#CCD4DF",
      300: "#81A3BF",
      400: "#818E9A",
      500: "#1A667A",
      600: "#1D2842",
    },
  };

export const themeSettings = createTheme({
      palette: {
             primary: {
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
        },
        h3: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
          fontSize: 20,
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
        
      },
    },
  );
