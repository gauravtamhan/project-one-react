import { Box, Divider, Grid, Typography, Link, Hidden } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Container from './Container'
import { ReactComponent as InvertedLogoWithWordMark } from 'images/inverted-logo-with-wordmark.svg'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  header: {
    color: theme.palette.typography.white.dark,
    paddingBottom: theme.spacing(1),
    fontSize: '1.25rem',
    lineHeight: 1.2,
  },
  body: {
    color: theme.palette.typography.white.light,
    fontSize: '0.875rem',
    lineHeight: 1.428,
    letterSpacing: 'normal',
  },
  divider: {
    backgroundColor: theme.palette.background.divider,
  },
  linksContainer: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
    },
  },
  links: {
    marginRight: theme.spacing(2.25),
  },
}))

const content = [
  {
    header: 'Learn more.',
    body: 'This is an open platform where readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface.',
  },
  {
    header: 'Make it yours.',
    body: 'Follow the writers, publications, and topics that matter to you, and you’ll see them on your homepage and in your inbox',
  },
  {
    header: 'Write a story.',
    body: 'If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. It’s easy and free to post your thinking on any topic.',
  },
]

const links = ['About', 'Write', 'Help', 'Legal']

const Footer = () => {
  const classes = useStyles()

  return (
    <Box
      component="footer"
      py={{ xs: 4, sm: 7.5 }}
      mt={{ xs: 4, sm: 6 }}
      bgcolor="background.footer"
    >
      <Container>
        <Hidden xsDown>
          <Grid container spacing={3}>
            {content.map(({ header, body }) => (
              <Grid item xs key={header}>
                <Typography variant="h2" className={classes.header}>
                  {header}
                </Typography>
                <Typography variant="subtitle1" className={classes.body}>
                  {body}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Box mt={6} mb={4}>
            <Divider className={classes.divider} />
          </Box>
        </Hidden>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InvertedLogoWithWordMark />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              display="flex"
              color="typography.white.dark"
              justifyContent="flex-end"
              className={classes.linksContainer}
            >
              {links.map((link, index, arr) => (
                <Link
                  key={link}
                  color="inherit"
                  variant="h3"
                  component={RouterLink}
                  to="/"
                  className={clsx({
                    [classes.links]: index !== arr.length - 1,
                  })}
                >
                  {link}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
