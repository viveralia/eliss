import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@material-ui/core";
import { TypographyStyleOptions } from "@material-ui/core/styles/createTypography";

/**********************************/
/*********** Typography ***********/
/**********************************/
const BODY_FONT = "IBM Plex Sans";
const HEADLINE_FONT = "Oswald";

const joinFonts = (fontFamily: string) => {
  return [fontFamily, "-apple-system", "sans-serif"].join(",");
};

const bodyStyles: TypographyStyleOptions = {
  fontFamily: joinFonts(BODY_FONT),
  fontWeight: 500,
};

const headlineStyles: TypographyStyleOptions = {
  fontFamily: joinFonts(HEADLINE_FONT),
  textTransform: "uppercase",
  fontWeight: 500,
};

const typography: ThemeOptions["typography"] = {
  fontFamily: joinFonts(BODY_FONT),
  h1: headlineStyles,
  h2: headlineStyles,
  h3: headlineStyles,
  h4: headlineStyles,
  h5: headlineStyles,
  h6: headlineStyles,
  body1: bodyStyles,
  body2: bodyStyles,
};

/**********************************/
/************** Base **************/
/**********************************/
const baseTheme: ThemeOptions = {
  typography,
  overrides: {
    MuiButton: {
      root: {
        fontFamily: HEADLINE_FONT,
        fontWeight: 500,
      },
    },
  },
};

/**********************************/
/*********** MUI Themes ***********/
/**********************************/
const nonResponsiveLightTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    type: "light",
    primary: {
      main: "#3A3A3A",
    },
    divider: "rgba(0,0,0,0.0725)",
  },
});

const nonResponsiveDarkTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    type: "dark",
    primary: {
      main: "#FBFBFB",
    },
    divider: "rgba(255, 255, 255, 0.125)",
    background: {
      paper: "#212121",
      default: "#101010",
    },
  },
});

export const lightTheme = responsiveFontSizes(nonResponsiveLightTheme);
export const darkTheme = responsiveFontSizes(nonResponsiveDarkTheme);
