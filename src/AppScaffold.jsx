// import useScrollTrigger from '@material-ui/core/useScrollTrigger'
// import Slide from '@material-ui/core/Slide'
import AppBar from 'components/Elements/AppBar'
import Container from 'components/Elements/Container'
import Footer from 'components/Elements/Footer'

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
      <Footer />
    </>
  )
}

export default AppScaffold
