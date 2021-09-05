import MuiAppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
// import InputBase from '@material-ui/core/InputBase'
import Hidden from '@material-ui/core/Hidden'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, alpha } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'
import { Link } from 'react-router-dom'
import Container from './Container'
import { ReactComponent as LogoWithWordMark } from 'images/logo-with-wordmark.svg'
import { ReactComponent as Logo } from 'images/logo.svg'

const useStyles = makeStyles((theme) => ({
  toolbarRoot: {
    justifyContent: 'space-between',
  },
  logoButton: {
    paddingLeft: 0,
    '&:hover': {
      backgroundColor: 'unset',
    },
  },
  avatar: {
    color: theme.palette.getContrastText(blueGrey[500]),
    backgroundColor: blueGrey[500],
    marginLeft: theme.spacing(1),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

// TODO: Implement search

const AppBar = () => {
  const classes = useStyles()
  return (
    <MuiAppBar position="sticky" color="default">
      <Container>
        <Toolbar disableGutters className={classes.toolbarRoot}>
          <Button
            disableRipple
            className={classes.logoButton}
            component={Link}
            to={'/'}
          >
            <Hidden xsDown>
              <LogoWithWordMark />
            </Hidden>
            <Hidden smUp>
              <Logo />
            </Hidden>
          </Button>

          <Box display="flex" alignItems="center">
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div> */}
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
            <IconButton aria-label="check notifications">
              <NotificationsIcon />
            </IconButton>
            <Avatar alt="Me" src="" className={classes.avatar}>
              M
            </Avatar>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  )
}

export default AppBar
