import React, { useState, useEffect } from 'react'
import { Grid, Typography, Divider, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { fetchAllPosts, fetchAllUsers } from 'api/jsonplaceholder'
import { fetchNumberOfImages } from 'api/picsum'
import Post from 'components/Post/Post'
import { shuffle } from 'utils/arrayUtils'

const useStyles = makeStyles((theme) => ({
  contentPaddingTop: {
    paddingTop: theme.spacing(5),
  },
}))

const mergeData = (posts, users, images) => {
  let merged = []

  for (let i = 0; i < posts.length; i++) {
    const { userId, ...restPost } = posts[i]
    const { name, email } = users.find((user) => user.id === userId)

    merged.push({
      ...restPost,
      authorName: name,
      authorEmail: email,
      imgUrl: images[i].download_url,
    })
  }

  return merged
}

const NUMBER_OF_POSTS = 10

const Dashboard = () => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPosts = await fetchAllPosts()
        shuffle(allPosts)
        const posts = allPosts.slice(0, NUMBER_OF_POSTS)
        const users = await fetchAllUsers()
        const imageNumberAdjustment = posts.length + 2
        const allImages = await fetchNumberOfImages(imageNumberAdjustment)
        const images = allImages.slice(2)

        setData(mergeData(posts, users, images))
      } catch (e) {
        console.log('Error: ', e)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if (isLoading || !data) return <div>Loading...</div>

  const mainContent = (
    <>
      <Typography variant="overline">Trending Posts</Typography>
      <Divider />
      {data.map(({ id, title, body, authorName, imgUrl }) => (
        <Post
          key={id}
          id={id}
          authorName={authorName}
          title={title}
          description={body}
          date={'May 21, 2020'}
          imgUrl={imgUrl}
        />
      ))}
    </>
  )

  const secondaryContent = (
    <div style={{ backgroundColor: '#cfe8fc', height: '600px' }}></div>
  )

  return (
    <Layout mainContent={mainContent} secondaryContent={secondaryContent} />
  )
}

/**
 * 2 Column Responsive Layout:
 * - main content spans 8 columns.
 * - secondary content spans 4 columns.
 *
 * On md screen sizes and lower:
 * - main content spans entire page, secondary content is hidden.
 */
const Layout = ({ mainContent, secondaryContent }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={2} className={classes.contentPaddingTop}>
      <Grid item xs={12} lg={8}>
        {mainContent}
      </Grid>
      <Hidden mdDown>
        <Grid item lg={4}>
          {secondaryContent}
        </Grid>
      </Hidden>
    </Grid>
  )
}

Layout.propTypes = {
  mainContent: PropTypes.element.isRequired,
  secondaryContent: PropTypes.element.isRequired,
}

export default Dashboard
