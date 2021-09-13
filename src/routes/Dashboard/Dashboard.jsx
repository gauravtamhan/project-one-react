import React, { useState, useEffect } from 'react'
import { Typography, Divider } from '@material-ui/core'
import { fetchAllPosts, fetchAllUsers } from 'api/jsonplaceholder'
import { fetchNumberOfImages } from 'api/picsum'
import Post from 'components/Post/Post'
import { shuffle } from 'utils/arrayUtils'
import Layout from 'components/Layout/TwoColLayout'
import Aside from 'components/Aside/Aside'

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
const NUMBER_OF_USERS_TO_FOLLOW = 3

const Dashboard = () => {
  const [combinedPostData, setCombinedPostData] = useState()
  const [users, setUsers] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPosts = await fetchAllPosts()
        const posts = allPosts.slice(0, NUMBER_OF_POSTS)
        const users = await fetchAllUsers()
        setUsers(shuffle(users))
        const imageNumberAdjustment = posts.length + 2
        const allImages = await fetchNumberOfImages(imageNumberAdjustment)
        const images = allImages.slice(2)

        setCombinedPostData(shuffle(mergeData(posts, users, images)))
      } catch (e) {
        console.log('Error: ', e)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if (isLoading || !combinedPostData) return <div>Loading...</div>

  const mainContent = (
    <>
      <Typography variant="overline" component="h1">
        Trending Posts
      </Typography>
      <Divider />
      {combinedPostData.map(({ id, title, body, authorName, imgUrl }) => (
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

  const usersToFollow = users.slice(0, NUMBER_OF_USERS_TO_FOLLOW)

  return (
    <Layout
      mainContent={mainContent}
      secondaryContent={<Aside usersToFollow={usersToFollow} />}
    />
  )
}

export default Dashboard
