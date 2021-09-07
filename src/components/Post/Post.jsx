import { Box, Typography, IconButton } from '@material-ui/core'
import BookmarkAdd from '@material-ui/icons/BookmarkBorderOutlined'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { capitalize } from 'utils/stringUtils'
import clsx from 'clsx'
import Avatar from 'components/Elements/Avatar'

const useStyles = makeStyles((theme) => ({
  avatarSmall: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    fontSize: '0.75rem',
    fontWeight: '700',
  },
  link: {
    textDecoration: 'none',
    color: 'initial',
  },
  multiLineEllipsis: {
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      lineHeight: 1.25,
    },
  },
  img: {
    width: 220,
    height: 160,
    [theme.breakpoints.down('xs')]: {
      width: 116,
      height: 102,
    },
  },
}))

const Post = ({ id, authorName, title, description, date, imgUrl }) => {
  const classes = useStyles()

  const linkTo = `/story/${id}`

  return (
    <Box
      display="flex"
      flex="1 1 auto"
      justifyContent="space-between"
      mt={{ xs: 4, sm: 6 }}
    >
      <Box width="100%" marginRight={2.5}>
        <Link to={linkTo} className={classes.link}>
          <Box display="flex" alignItems="center" pb={1}>
            <Avatar alt={authorName} className={classes.avatarSmall}>
              {authorName[0]}
            </Avatar>
            <Box ml={1}>
              <Typography variant="h4">{authorName}</Typography>
            </Box>
          </Box>
          <Typography
            variant="h2"
            className={clsx([classes.multiLineEllipsis, classes.title])}
          >
            {capitalize(title)}
          </Typography>
          <Box pt={0.5} display={{ xs: 'none', sm: 'block' }}>
            <Typography variant="h3" className={classes.multiLineEllipsis}>
              {capitalize(description)}
            </Typography>
          </Box>
        </Link>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1">{`${date} · 1 min read`}</Typography>
          <IconButton aria-label="save story">
            <BookmarkAdd />
          </IconButton>
        </Box>
      </Box>
      <Link to={linkTo} className={classes.link}>
        <img
          src={imgUrl}
          className={classes.img}
          alt={`a placeholder for post ${id}`}
        />
      </Link>
    </Box>
  )
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  authorName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
}

export default Post
