import { createTheme } from '@material-ui/core/styles'

/**
 * App Colors
 */
const colors = {
  white: '#fff',
  whiteMedium: 'rgba(255, 255, 255, 0.54)',
  footer: '#191919',
  green: '#1a8917',
  typography: {
    primary: '#292929',
    secondary: '#757575',
    white: {
      dark: 'rgba(255, 255, 255, 0.98)',
      light: 'rgba(255, 255, 255, 0.7)',
    },
  },
}

/**
 * App Break Points
 */
const breakPoints = {
  xs: 0,
  sm: 600,
  md: 905,
  lg: 1240,
  xl: 1440,
}

/**
 * Overrides
 */
const muiAppBar = {
  MuiAppBar: {
    root: {
      boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
    },
    colorDefault: {
      // TODO: Add text color and see if it changes icon colors
      backgroundColor: colors.white,
    },
  },
}

const muiButton = {
  MuiButton: {
    root: {
      fontSize: 14,
      lineHeight: 1.43,
      textTransform: 'none',
      borderRadius: 24,
      color: colors.typography.primary,
    },
    outlined: {
      borderColor: colors.typography.secondary,
      padding: '5px 12px 5px',
    },
    contained: {
      padding: '5px 12px 5px',
    },
    containedSecondary: {
      '&.Mui-disabled': {
        backgroundColor: colors.green,
        opacity: 0.3,
        color: colors.white,
      },
    },
  },
}

const muiSvgIcon = {
  MuiSvgIcon: {
    root: {
      color: colors.typography.primary,
    },
  },
}

const muiDrawer = {
  MuiDrawer: {
    paperAnchorBottom: {
      top: 40,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
  },
}

const muiInputBase = {
  MuiInputBase: {
    root: {
      color: colors.typography.primary,
      margin: 0,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem', // 14px
      lineHeight: 1.4, // 20px
      [`@media (min-width:${breakPoints.sm}px)`]: {
        margin: 0,
        fontSize: '0.875rem', // 14px
        lineHeight: 1.4, // 20px
      },
    },
  },
}

const muiSnackbar = {
  MuiSnackbar: {
    root: {
      left: 60,
      right: 60,
    },
    anchorOriginTopCenter: {
      top: 64,
      [`@media (min-width:${breakPoints.sm}px)`]: {
        top: 72,
      },
    },
  },
}

export const muiTheme = createTheme({
  overrides: {
    ...muiAppBar,
    ...muiButton,
    ...muiDrawer,
    ...muiInputBase,
    ...muiSnackbar,
    ...muiSvgIcon,
  },
  breakpoints: {
    values: {
      ...breakPoints,
    },
  },
  palette: {
    background: {
      default: colors.white,
      footer: colors.footer,
      divider: colors.whiteMedium,
    },
    typography: {
      primary: colors.typography.primary,
      secondary: colors.typography.secondary,
      white: {
        dark: colors.typography.white.dark,
        light: colors.typography.white.light,
      },
    },
    secondary: {
      main: colors.green,
    },
  },
  typography: {
    h2: {
      fontSize: '1.375rem', // 22px
      fontWeight: 700,
      lineHeight: 1.27, // 28px
      color: colors.typography.primary,
    },
    h3: {
      fontSize: '1rem', // 16px
      fontWeight: 400,
      lineHeight: 1.25, // 20px
      color: colors.typography.secondary,
    },
    h4: {
      fontSize: '0.8125rem', // 13px
      fontWeight: 700,
      lineHeight: 1.23, // 16px
      color: colors.typography.primary,
    },
    subtitle1: {
      fontSize: '0.8125rem', // 13px
      fontWeight: 400,
      lineHeight: 1.54, // 20px
      color: colors.typography.secondary,
    },
    overline: {
      fontSize: '0.8125rem', // 13px
      letterSpacing: '0.077em',
      lineHeight: 1.38, // 18px
      color: colors.typography.secondary,
    },
    h1: {
      fontFamily: 'Lora, serif',
      fontWeight: 400,
      fontSize: '2.125rem', // 34px
      lineHeight: 'normal',
      [`@media (min-width:${breakPoints.sm}px)`]: {
        fontSize: '2.875rem', // 46px
        lineHeight: 1.21, // 56px
      },
    },
    body1: {
      fontFamily: 'Lora, serif',
      fontWeight: 400,
      fontSize: '1.125rem', // 18px
      lineHeight: 1.55, // 28px
      margin: '24px 0 0',
      [`@media (min-width:${breakPoints.sm}px)`]: {
        fontSize: '1.3125rem', // 21px
        lineHeight: 1.52, // 32px
        margin: '32px 0 0',
      },
    },
    caption: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: '0.01071em',
      color: colors.typography.secondary,
      textAlign: 'center',
      margin: '10px 0 0',
    },
  },
})
