import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomTheme extends Theme {
    fontWeights: {
      swiftcaseSuperLightweight: number;
      swiftcaseLightweight: number;
      swiftcaseMidweight: number;
      swiftcaseSemiBold: number;
      swiftcaseBold: number;
      swiftcaseExtraBold?: number;
    };
  }

  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    fontWeights?: {
      swiftcaseSuperLightweight?: number;
      swiftcaseLightweight?: number;
      swiftcaseMidweight?: number;
      swiftcaseSemiBold?: number;
      swiftcaseBold?: number;
      swiftcaseExtraBold?: number;
    };
  }

  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
