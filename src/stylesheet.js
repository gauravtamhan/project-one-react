import { createTheme } from '@material-ui/core/styles'

/**
 * App Colors
 */
const colors = {
  white: '#fff',
}

const muiAppBar = {
  MuiAppBar: {
    root: {
      boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
    },
    colorDefault: {
      backgroundColor: colors.white,
    },
  },
}

export const muiTheme = createTheme({
  overrides: {
    ...muiAppBar,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 905,
      lg: 1240,
      xl: 1440,
    },
  },
  palette: {
    background: {
      default: colors.white,
    },
  },
})
