import { makeStyles } from '@material-ui/core/styles'
import MuiContainer from '@material-ui/core/Container'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  containerRoot: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 32,
      paddingRight: 32,
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 840,
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 0,
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 'unset',
      paddingLeft: 200,
      paddingRight: 200,
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: 1040,
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 0,
    },
  },
}))

const Container = ({ component, children }) => {
  const classes = useStyles()

  return (
    <MuiContainer
      classes={{ root: classes.containerRoot }}
      maxWidth={false}
      component={component}
    >
      {children}
    </MuiContainer>
  )
}

Container.propTypes = {
  component: PropTypes.oneOf(['div', 'main']),
}

Container.defaultProps = {
  component: 'div',
}

export default Container
