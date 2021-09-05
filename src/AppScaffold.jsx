// import useScrollTrigger from '@material-ui/core/useScrollTrigger'
// import Slide from '@material-ui/core/Slide'
import AppBar from 'components/Elements/AppBar'
import Container from 'components/Elements/Container'

// const HideOnScroll = ({ children }) => {
//   const trigger = useScrollTrigger()

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   )
// }

const AppScaffold = ({ children }) => {
  return (
    <>
      <AppBar />
      <Container component="main">{children}</Container>
    </>
  )
}

export default AppScaffold
