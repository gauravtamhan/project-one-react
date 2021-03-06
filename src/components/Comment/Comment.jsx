import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Drawer,
  Divider,
  Button,
  InputBase,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline'
import Close from '@material-ui/icons/Close'
import Avatar from 'components/Elements/Avatar'
import { capitalize } from 'utils/stringUtils'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  colorPrimary: {
    color: theme.palette.typography.primary,
  },
  smallAvatar: {
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      fontSize: '0.85rem',
    },
  },
  initialLineHeight: {
    lineHeight: 'initial',
  },
  drawerRoot: {
    width: 414,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  drawerContent: {
    paddingLeft: 'max(24px, env(safe-area-inset-left))',
    paddingRight: 'max(24px, env(safe-area-inset-left))',
  },
  paperInputArea: {
    margin: theme.spacing(5, 0),
    padding: theme.spacing(1.75),
    borderRadius: 2,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.12)',
    minHeight: 1,
  },
  btnMargin: {
    marginRight: theme.spacing(0.5),
  },
  mobileFontSize: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  mobileSubFontSize: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.875rem',
      lineHeight: 1.25,
    },
  },
}))

const Comment = ({ comments, drawerOpen, toggleDrawer }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  const [comment, setComment] = useState('')

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    setComment('')
  }

  const numberOfComments = comments.length

  return (
    <>
      <IconButton
        aria-label={`view ${numberOfComments} comments`}
        onClick={() => {
          toggleDrawer(true)
        }}
      >
        <ChatBubbleOutline />
      </IconButton>
      <Box ml={0.75}>
        <Typography
          aria-label={`${numberOfComments} comments`}
          variant="subtitle1"
          className={classes.colorPrimary}
        >
          {numberOfComments}
        </Typography>
      </Box>
      <Drawer
        anchor={isMobile ? 'bottom' : 'right'}
        open={drawerOpen}
        onClose={() => {
          toggleDrawer(false)
        }}
      >
        <Box component="aside" className={classes.drawerRoot}>
          <Box className={classes.drawerContent} pt={3} pb={1.5}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mr={-1}
              mt={-1}
            >
              <Typography variant="h2">Comments ({comments.length})</Typography>
              <IconButton
                aria-label="close comments"
                className={classes.colorPrimary}
                onClick={() => {
                  toggleDrawer(false)
                }}
              >
                <Close />
              </IconButton>
            </Box>
            <Paper className={classes.paperInputArea}>
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleCommentSubmit}
              >
                <Box>
                  <InputBase
                    name="comment"
                    fullWidth
                    classes={{ root: classes.mobileFontSize }}
                    multiline
                    placeholder="What's on your mind?"
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value)
                    }}
                    inputProps={{ 'aria-label': 'comment area' }}
                  />
                </Box>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                  mt={1.5}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disableElevation
                    disabled={!comment}
                  >
                    Respond
                  </Button>
                </Box>
              </form>
            </Paper>
            <Typography variant="overline">Most Relevant</Typography>
          </Box>

          <Divider />

          <Box className={classes.drawerContent} py={2}>
            {comments.map(({ id, email, body }, index, arr) => (
              <React.Fragment key={id}>
                <Box my={4}>
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    alignItems={{ xs: 'center', sm: 'flex-start' }}
                    mb={2}
                  >
                    <Avatar className={classes.smallAvatar} alt={email}>
                      {capitalize(email[0])}
                    </Avatar>
                    <Box ml={1.5}>
                      <Typography
                        variant="subtitle1"
                        className={clsx([
                          classes.colorPrimary,
                          classes.initialLineHeight,
                          classes.mobileFontSize,
                        ])}
                      >
                        {email}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        className={classes.mobileSubFontSize}
                      >
                        2 days ago
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    className={clsx([
                      classes.colorPrimary,
                      classes.mobileFontSize,
                    ])}
                  >
                    {capitalize(body)}.
                  </Typography>
                </Box>
                {index !== arr.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

Comment.propType = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
}

export default Comment
