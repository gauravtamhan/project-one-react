import PropTypes from 'prop-types'
import { Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Topics from 'components/Aside/Topics'
import Follows from 'components/Aside/Follows'
import ReadingList from 'components/Aside/ReadingList'

const useStyles = makeStyles((theme) => ({
  dividerMargin: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
}))

const Aside = ({ usersToFollow }) => {
  const classes = useStyles()

  return (
    <>
      <Topics />
      <Divider className={classes.dividerMargin} />
      <Follows usersToFollow={usersToFollow} />
      <Divider className={classes.dividerMargin} />
      <ReadingList />
    </>
  )
}

Aside.propTypes = {
  usersToFollow: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ),
}

export default Aside
