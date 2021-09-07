import { Box, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AsideSection from 'components/Layout/AsideSection'
import PropTypes from 'prop-types'
import Avatar from 'components/Elements/Avatar'

const useStyles = makeStyles((theme) => ({
  typographyEllipsis: {
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
  },
}))

const Follows = ({ usersToFollow }) => {
  const classes = useStyles()

  return (
    <AsideSection
      header="Who to Follow"
      content={
        <>
          {usersToFollow.map(({ id, name, email }) => (
            <Box
              key={id}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              pb={2}
            >
              <Box display="flex" alignItems="center">
                <Avatar alt={name}>{name[0]}</Avatar>
                <Box mx={2} maxWidth="148px">
                  <Typography variant="h4">{name}</Typography>
                  <Typography
                    variant="subtitle1"
                    className={classes.typographyEllipsis}
                  >
                    {email}
                  </Typography>
                </Box>
              </Box>
              <Button variant="outlined">Follow</Button>
            </Box>
          ))}
        </>
      }
    />
  )
}

Follows.propTypes = {
  usersToFollow: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ),
}

export default Follows
