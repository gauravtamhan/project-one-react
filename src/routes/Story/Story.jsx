import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box, Typography, IconButton, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BookmarkAdd from '@material-ui/icons/BookmarkBorderOutlined'
import Link from '@material-ui/icons/Link'
import ThumbUpOutlined from '@material-ui/icons/ThumbUpOutlined'
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline'
import Avatar from 'components/Elements/Avatar'
import { topics, Chip } from 'components/Aside/Topics'
import { fetchSinglePost, fetchSingleUser } from 'api/jsonplaceholder'
import { capitalize } from 'utils/stringUtils'
import { shuffle } from 'utils/arrayUtils'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  colorPrimary: {
    color: theme.palette.typography.primary,
  },
}))

const bodyFiller1 =
  'Donec id nisl quis felis tristique feugiat. Nulla in est sit amet leo maximus commodo. Sed quis consectetur elit, ac aliquet tellus. Fusce sapien libero, dignissim sed arcu ut, tristique aliquam odio. Cras molestie mi eget mattis hendrerit. Nullam vestibulum lorem nec elit pulvinar rhoncus. Phasellus imperdiet lacus at venenatis viverra. Donec nec erat quis tortor sodales lobortis id non tortor.'
const bodyFiller2 =
  'Morbi sagittis ante quis tristique tristique. Suspendisse eleifend quam maximus, eleifend leo maximus, convallis magna. Proin pellentesque metus orci, ut scelerisque leo condimentum sed. Nullam non magna a ante dictum dapibus.'

const Story = () => {
  const classes = useStyles()
  const { id } = useParams()

  const [postData, setPostData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { userId, ...postData } = await fetchSinglePost(id.toString())
        const { name } = await fetchSingleUser(id.toString())
        setPostData({
          ...postData,
          name,
        })
      } catch (e) {
        console.log('Error: ', e)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [id])

  if (isLoading) return <div>Loading...</div>

  const { title, body, name } = postData
  const date = 'May 21, 2020'

  const storyActions = (
    <Box display="flex">
      <IconButton aria-label="copy link" className={classes.colorPrimary}>
        <Link />
      </IconButton>
      <IconButton aria-label="save story" className={classes.colorPrimary}>
        <BookmarkAdd />
      </IconButton>
    </Box>
  )

  return (
    <>
      <Box component="article">
        <CenterContainer my={5}>
          <Typography variant="h1">{capitalize(title)}</Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={4}
          >
            <Box display="flex" alignItems="center">
              <Avatar alt={name}>{name[0]}</Avatar>
              <Box ml={1}>
                <Typography
                  variant="subtitle1"
                  className={classes.colorPrimary}
                >
                  {name}
                </Typography>
                <Typography variant="subtitle1">{`${date} · 1 min read`}</Typography>
              </Box>
            </Box>
            {storyActions}
          </Box>

          <Box component="figure" m={0} mt={{ xs: 5.25, sm: 7 }}>
            <img
              alt="placeholder for this story"
              src="https://picsum.photos/680/430"
              className={classes.image}
            />
            <Typography component="figcaption" variant="caption">
              Photo by Picsum from Unsplash.
            </Typography>
          </Box>

          <Typography variant="body1">{capitalize(body)}.</Typography>

          <Typography variant="body1">{bodyFiller1}</Typography>
          <Typography variant="body1">{bodyFiller2}</Typography>
        </CenterContainer>
      </Box>

      <CenterContainer>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Box display="flex" alignItems="center" ml={-1}>
            <IconButton
              aria-label="like story"
              className={classes.colorPrimary}
            >
              <ThumbUpOutlined />
            </IconButton>
            <Box ml={0.75} mr={2}>
              <Typography variant="subtitle1" className={classes.colorPrimary}>
                3.2K
              </Typography>
            </Box>
            <IconButton
              aria-label="view comments"
              className={classes.colorPrimary}
            >
              <ChatBubbleOutline />
            </IconButton>
            <Box ml={0.75}>
              <Typography variant="subtitle1" className={classes.colorPrimary}>
                12
              </Typography>
            </Box>
          </Box>
          {storyActions}
        </Box>
        <Divider />
        <Box my={4} ml={-0.75}>
          {shuffle(topics)
            .slice(0, 3)
            .map((topic) => (
              <Chip key={topic} label={topic} onClick={() => null} />
            ))}
        </Box>
      </CenterContainer>
    </>
  )
}

const CenterContainer = ({ children, my }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box my={my} maxWidth={680} width="100%">
        {children}
      </Box>
    </Box>
  )
}

CenterContainer.propTypes = {
  children: PropTypes.node.isRequired,
  my: PropTypes.number,
}

CenterContainer.defaultProps = {
  my: 0,
}

export default Story
