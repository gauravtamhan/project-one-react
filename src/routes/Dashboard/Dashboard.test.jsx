import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Dashboard from './Dashboard'

describe('Posts', () => {
  const history = createMemoryHistory()

  beforeEach(async () => {
    // Given we are viewing the dashboard
    render(
      <Router history={history}>
        <Dashboard />
      </Router>
    )

    // When the page loads
    await screen.findByText(/TRENDING POSTS/i)
  })

  it('renders posts with all elements', async () => {
    // Then we see a title
    screen.getByText(/fake title/i)

    // And a body
    screen.getByText(/some fake body text/i)

    // And an author name
    screen.getByText(/fake name/i)

    // And an image
    screen.getByAltText(/a placeholder for post 1/i)

    // And a save story button
    expect(screen.getAllByRole('button', { name: /save story/i })).toHaveLength(
      2
    )
  })

  it('navigates to story when clicked', async () => {
    expect(history.location.pathname).toBe('/')

    // When we click on the first post
    const post = screen.getByRole('heading', { name: /fake title/i })
    user.click(post)

    // Then we are navigated to /story/1
    expect(history.location.pathname).toBe('/story/1')
  })
})
