import { Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  marginBottom: {
    marginBottom: theme.spacing(7),
  },
}))

const AsideSection = ({ header, content, marginBottom }) => {
  const classes = useStyles()

  return (
    <Box
      component="section"
      className={clsx({
        [classes.marginBottom]: marginBottom,
      })}
    >
      <Typography variant="overline">{header}</Typography>
      <Box mt={4}>{content}</Box>
    </Box>
  )
}

AsideSection.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
  marginBottom: PropTypes.bool,
}

AsideSection.defaultProps = {
  marginBottom: false,
}

export default AsideSection
