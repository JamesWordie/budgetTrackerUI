import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: "Montserrat",
    h1: {
      fontSize: "5rem",
      lineHeight: 1.25,
      fontWeight: 700,
    },
    h2: {
      fontSize: "3.8rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1.125rem",
    },
    body1: {
      fontSize: "2rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "1.7rem", // ONLY USED INSIDE A CARD (card description/content)
    },
    subtitle1: {
      fontSize: "1rem", // p-tags
    },
    subtitle2: {
      fontSize: "0.875rem", // p-tags
    },
  },
  fontWeights: {
    swiftcaseSuperLightweight: 300,
    swiftcaseLightweight: 400,
    swiftcaseMidweight: 500,
    swiftcaseSemiBold: 600,
    swiftcaseBold: 700,
    swiftcaseExtraBold: 900,
  },
  palette: {
    primary: {
      main: "#184f7f", // medium blue
      contrastText: "#fff",
    },
    error: {
      main: "#951b40", // medium pink
      contrastText: "#fff",
    },
    success: {
      main: "#1d7c39", // medium green
      contrastText: "#fff",
    },
    secondary: {
      main: "#0f2437", // darkest blue
      contrastText: "#fff",
    },
    info: {
      main: "#555", // mid grey
      contrastText: "#fff",
    },
    warning: {
      main: "#71bc83", // lightest green
      contrastText: "#fff",
    },
    colors: {
      swiftcaseBlue: "#3478be",
      swiftcasePink: "#cd2760",
      swiftcaseGreen: "#44ba53",
      swiftcaseWhite: "#fff",
      swiftcaseGrey: "#d3d3d3",
      swiftcaseBlack: "#000",
      swiftcaseMidGrey: "#555",
      swiftcaseBlueSteel: "#67607c",
      swiftcaseOffwhite: "#eff0f6",
      //   swiftcaseDarkBlue: "#1b1f3b", old dark blue
      shadowGrey: "#f1f1f1",
      scrollbarGrey: "#c1c1c1",
      swiftcaseWebsitePink: "#CB2861",
      swiftcaseWebsiteLightGrey: "#f2f2f2",
      swiftcaseWebsiteBlue: "#3579BC",
      swiftcaseNeonGreen: "#49B653",
      swiftcaseLinkBlue: "#586DBA",
      swiftcaseLightestPink: "#d85e84",
      swiftcaseLightPink: "#ce2357",
      swiftcaseMediumPink: "#951b40",
      swiftcaseDarkPink: "#471121",
      swiftcaseDarkestPink: "#46212d",
      swiftcaseLightestBlue: "#6294bf",
      swiftcaseLightBlue: "#1f6eb4",
      swiftcaseMediumBlue: "#184f7f",
      swiftcaseDarkBlue: "#1f2c37",
      swiftcaseDarkestBlue: "#0f2437",
      swiftcaseLightestGreen: "#71bc83",
      swiftcaseLightGreen: "#25b050",
      swiftcaseMediumGreen: "#1d7c39",
      swiftcaseDarkGreen: "#11341b",
      swiftcaseDarkestGreen: "#213426",
      swiftcaseGold: "#d6a215",
      swiftcaseBackgroundBlue: "#191d33",
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",

          ":hover": {
            textDecoration: "underline",
          },
        },
      },
      variants: [
        {
          props: { size: "large" },
          style: {
            fontSize: "1.6rem",
          },
        },
        {
          props: { size: "medium" },
          style: {
            fontSize: "1.3rem",
          },
        },
        {
          props: { variant: "text" },
          style: {
            color: "#fff",
            "&:hover": {
              textDecoration: "underline",
            },
          },
        },
      ],
    },
  },
});

export const colors = theme.palette.colors;

export default theme;
