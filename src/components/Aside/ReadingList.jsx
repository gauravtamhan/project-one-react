import { Typography } from '@material-ui/core'
import BookmarkAdd from '@material-ui/icons/BookmarkBorderOutlined'
import { makeStyles } from '@material-ui/core/styles'
import AsideSection from 'components/Layout/AsideSection'

const useStyles = makeStyles((theme) => ({
  readingListText: {
    lineHeight: '24px',
  },
  readingListIcon: {
    verticalAlign: 'middle',
    color: theme.palette.typography.secondary,
  },
}))

const ReadingList = () => {
  const classes = useStyles()

  return (
    <AsideSection
      header="Reading List"
      marginBottom
      content={
        <Typography
          variant="h3"
          component="p"
          className={classes.readingListText}
        >
          Click the <BookmarkAdd className={classes.readingListIcon} /> on any
          story to easily add it to your reading list or a custom list that you
          can share.
        </Typography>
      }
    />
  )
}

export default ReadingList
