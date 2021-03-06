import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { muiTheme } from 'stylesheet'
import AppScaffold from 'AppScaffold'
import Dashboard from 'routes/Dashboard/Dashboard'
import Story from 'routes/Story/Story'
import Profile from 'routes/Profile/Profile'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Dashboard />
      </Route>
      <Route path="/story/:id" exact>
        <Story />
      </Route>
      <Route path="/profile/:id" exact>
        <Profile />
      </Route>
    </Switch>
  )
}

const App = () => (
  <Router>
    <ScrollToTop />
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <AppScaffold>
        <Routes />
      </AppScaffold>
    </ThemeProvider>
  </Router>
)

export default App
