import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { muiTheme } from './stylesheet'
import Dashboard from './routes/Dashboard/Dashboard'
import Story from './routes/Story/Story'
import Profile from './routes/Profile/Profile'

const Routes = () => {
  return (
    <Router>
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
    </Router>
  )
}

const App = () => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline />
    <Routes />
  </ThemeProvider>
)

export default App
