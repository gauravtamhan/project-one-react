import { Chip, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AsideSection from 'components/Layout/AsideSection'

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.75),
  },
}))

const topics = [
  'Art',
  'World',
  'Election 2020',
  'Technology',
  'Gaming',
  'Sports',
  'Photography',
  'Social Media',
]

const Topics = () => {
  const classes = useStyles()

  return (
    <AsideSection
      header="Recommended Topics"
      content={
        <Box ml={-0.75}>
          {topics.map((topic) => (
            <Chip
              key={topic}
              label={topic}
              className={classes.chip}
              onClick={() => null}
            />
          ))}
        </Box>
      }
    />
  )
}

export default Topics
