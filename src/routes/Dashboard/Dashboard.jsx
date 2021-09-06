import { Grid, Box, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Post from 'components/Post/Post'

const useStyles = makeStyles((theme) => ({
  contentPaddingTop: {
    paddingTop: theme.spacing(5),
  },
}))

const Layout = ({ mainContent, secondaryContent }) => {
  const classes = useStyles()
  // left col: 8
  // right col: 4
  // on md down left col takes 12, kill right col
  return (
    <Grid container spacing={2} className={classes.contentPaddingTop}>
      <Grid item xs={12} lg={8}>
        {mainContent}
      </Grid>
      <Grid item xs={false} lg={4}>
        {secondaryContent}
      </Grid>
    </Grid>
  )
}

Layout.propTypes = {
  mainContent: PropTypes.element.isRequired,
  secondaryContent: PropTypes.element.isRequired,
}
const authorName = 'Leanne Jarvis'
const title =
  'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
const description =
  'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
// https://picsum.photos/220/160
const imgUrl =
  'https://i.picsum.photos/id/29/220/160.jpg?hmac=xbm8MZIfApADjGllj_Iqj2uOi3r9yh4I71OjGoNNEmU'
const date = 'May 29 2020'

const Dashboard = () => {
  const mainContent = (
    <Box>
      <Typography variant="overline">Trending Posts</Typography>
      <Divider />
      <Post
        id={1}
        authorName={authorName}
        title={title}
        description={description}
        date={date}
        imgUrl={imgUrl}
      />
      <Post
        id={2}
        authorName={authorName}
        title={title}
        description={description}
        date={date}
        imgUrl={imgUrl}
      />
    </Box>
  )

  const secondaryContent = (
    <div style={{ backgroundColor: '#cfe8fc', height: '600px' }}></div>
  )

  return (
    <Layout mainContent={mainContent} secondaryContent={secondaryContent} />
  )
}

export default Dashboard
