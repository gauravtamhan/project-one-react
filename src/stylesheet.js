import { createTheme } from '@material-ui/core/styles'

/**
 * App Colors
 */
const colors = {
  white: '#fff',
  typography: {
    primary: '#292929',
    secondary: '#757575',
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
  },
}

export const muiTheme = createTheme({
  overrides: {
    ...muiAppBar,
    ...muiButton,
  },
  breakpoints: {
    values: {
      ...breakPoints,
    },
  },
  palette: {
    background: {
      default: colors.white,
    },
    typography: {
      primary: '#292929',
      secondary: '#757575',
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
