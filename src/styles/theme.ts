import { createMuiTheme, responsiveFontSizes, ThemeOptions } from "@material-ui/core";
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
  fontWeight: 500,
  textTransform: "uppercase",
};

const typography: ThemeOptions["typography"] = {
  body1: bodyStyles,
  body2: bodyStyles,
  fontFamily: joinFonts(BODY_FONT),
  h1: headlineStyles,
  h2: headlineStyles,
  h3: headlineStyles,
  h4: headlineStyles,
  h5: headlineStyles,
  h6: headlineStyles,
};

/**********************************/
/************** Base **************/
/**********************************/
const baseTheme: ThemeOptions = {
  overrides: {
    MuiButton: {
      root: {
        fontFamily: HEADLINE_FONT,
        fontWeight: 500,
      },
    },
  },
  typography,
};

/**********************************/
/*********** MUI Themes ***********/
/**********************************/
const nonResponsiveLightTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    divider: "rgba(0,0,0,0.0725)",
    primary: {
      main: "#3A3A3A",
    },
    type: "light",
  },
});

const nonResponsiveDarkTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    background: {
      default: "#101010",
      paper: "#212121",
    },
    divider: "rgba(255, 255, 255, 0.125)",
    primary: {
      main: "#FBFBFB",
    },
    type: "dark",
  },
});

export const lightTheme = responsiveFontSizes(nonResponsiveLightTheme);
export const darkTheme = responsiveFontSizes(nonResponsiveDarkTheme);
