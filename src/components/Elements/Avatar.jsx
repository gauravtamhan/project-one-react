import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiAvatar from '@material-ui/core/Avatar'
import clsx from 'clsx'
import {
  blueGrey,
  indigo,
  red,
  amber,
  yellow,
  green,
  blue,
} from '@material-ui/core/colors'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  blueGrey: {
    color: theme.palette.getContrastText(blueGrey[500]),
    backgroundColor: blueGrey[500],
  },
  indigo: {
    color: theme.palette.getContrastText(indigo[500]),
    backgroundColor: indigo[500],
  },
  red: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  amber: {
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[500],
  },
  yellow: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
  },
  green: {
    color: theme.palette.getContrastText(green[600]),
    backgroundColor: green[600],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
}))

const Avatar = ({ children, className, ...rest }) => {
  const classes = useStyles()

  const avatarColors = [
    classes.indigo,
    classes.red,
    classes.amber,
    classes.yellow,
    classes.green,
    classes.blue,
  ]

  return (
    <MuiAvatar
      {...rest}
      className={clsx([
        avatarColors[Math.floor(Math.random() * avatarColors.length)],
        className,
      ])}
    >
      {children}
    </MuiAvatar>
  )
}

Avatar.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
}

export default React.memo(Avatar)
