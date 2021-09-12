import { screen, render } from '@testing-library/react'
import Follows from './Follows'

const mockUserData = [
  {
    id: 1,
    name: 'Fake Name 1',
    email: 'fakeuser1@email.com',
  },
]

it('renders the section with all elements', () => {
  // When we view the section
  render(<Follows usersToFollow={mockUserData} />)

  // Then we expect to see a title
  screen.getByText(/who to follow/i)

  // And an avatar
  screen.getByText(mockUserData[0].name[0])

  // And the user name
  screen.getByText(mockUserData[0].name)

  // And the user email
  screen.getByText(mockUserData[0].email)

  // And the follow button
  screen.getByRole('button', { name: /follow/i })
})
