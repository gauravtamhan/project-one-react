import PropTypes from 'prop-types'
import { Chip as MuiChip, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AsideSection from 'components/Layout/AsideSection'

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.75),
  },
}))

export const topics = [
  'Art',
  'World',
  'Election 2020',
  'Technology',
  'Gaming',
  'Sports',
  'Photography',
  'Social Media',
]

export const Chip = ({ label, onClick }) => {
  const classes = useStyles()

  return <MuiChip label={label} className={classes.chip} onClick={onClick} />
}

Chip.propType = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

const Topics = () => {
  return (
    <AsideSection
      header="Recommended Topics"
      content={
        <Box ml={-0.75}>
          {topics.map((topic) => (
            <Chip key={topic} label={topic} onClick={() => null} />
          ))}
        </Box>
      }
    />
  )
}

export default Topics
