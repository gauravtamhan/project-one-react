import React, { useState } from 'react'
import { Snackbar, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/icons/Link'

const copyToClipboard = (value, callback) => {
  const el = document.createElement('input')
  el.value = `${value}`
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)

  if (callback) {
    callback()
  }
}

const useStyles = makeStyles((theme) => ({
  colorPrimary: {
    color: theme.palette.typography.primary,
  },
}))

const CopyLinkButton = () => {
  const classes = useStyles()

  const [snackbarOpen, setSnackbarOpen] = useState(false)

  return (
    <>
      <IconButton
        aria-label="copy link"
        className={classes.colorPrimary}
        onClick={() => {
          copyToClipboard(window.location.href, () => {
            setSnackbarOpen(true)
          })
        }}
      >
        <Link />
      </IconButton>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={3500}
        open={snackbarOpen}
        onClose={() => {
          setSnackbarOpen(false)
        }}
        message="Link copied to clipboard"
      />
    </>
  )
}

export default CopyLinkButton
