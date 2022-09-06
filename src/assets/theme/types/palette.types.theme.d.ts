import { Palette, PaletteOptions } from "@mui/material/styles";
import createPalette from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface ColorVariables {
    swiftcaseBlue: string;
    swiftcasePink: string;
    swiftcaseGreen: string;
    swiftcaseWhite: string;
    swiftcaseGrey: string;
    swiftcaseBlack: string;
    swiftcaseMidGrey: string;
    swiftcaseBlueSteel: string;
    swiftcaseOffwhite: string;
    shadowGrey: string;
    scrollbarGrey: string;
    swiftcaseWebsitePink: string;
    swiftcaseWebsiteLightGrey: string;
    swiftcaseWebsiteBlue: string;
    swiftcaseNeonGreen: string;
    swiftcaseLinkBlue: string;
    swiftcaseLightestPink: string;
    swiftcaseLightPink: string;
    swiftcaseMediumPink: string;
    swiftcaseDarkPink: string;
    swiftcaseDarkestPink: string;
    swiftcaseLightestBlue: string;
    swiftcaseLightBlue: string;
    swiftcaseMediumBlue: string;
    swiftcaseDarkBlue: string;
    swiftcaseDarkestBlue: string;
    swiftcaseLightestGreen: string;
    swiftcaseLightGreen: string;
    swiftcaseMediumGreen: string;
    swiftcaseDarkGreen: string;
    swiftcaseDarkestGreen: string;
    swiftcaseGold: string;
    swiftcaseBackgroundBlue: string;
  }

  interface Palette {
    swiftcaseBlue: Palette["primary"];
    swiftcasePink: Palette["secondary"];
    swiftcaseGreen: Palette["success"];
    colors: ColorVariables;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    swiftcaseBlue?: PaletteOptions["primary"];
    swiftcasePink?: PaletteOptions["secondary"];
    swiftcaseGreen?: PaletteOptions["success"];
    colors?: ColorVariables;
  }
}
