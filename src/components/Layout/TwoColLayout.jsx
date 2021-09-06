import { Grid, Hidden, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  contentPaddingTop: {
    paddingTop: theme.spacing(5),
  },
}))

/**
 * 2 Column Responsive Layout:
 * - main content spans 8 columns.
 * - secondary content spans 4 columns.
 *
 * On md screen sizes and lower:
 * - main content spans entire page, secondary content is hidden.
 */
const TwoColLayout = ({ mainContent, secondaryContent }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={2} className={classes.contentPaddingTop}>
      <Grid item xs={12} lg={8}>
        {mainContent}
      </Grid>
      <Hidden mdDown>
        <Grid item lg={4}>
          <Box component="aside" position="sticky" top={0} px={3} py={1}>
            {secondaryContent}
          </Box>
        </Grid>
      </Hidden>
    </Grid>
  )
}

TwoColLayout.propTypes = {
  mainContent: PropTypes.element.isRequired,
  secondaryContent: PropTypes.element.isRequired,
}

export default TwoColLayout
