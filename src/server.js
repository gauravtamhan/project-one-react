import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/posts', (_req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          title: 'Fake Title',
          body: 'Some fake body text',
          userId: 1,
        },
        {
          id: 2,
          title: 'Fake Other Title',
          body: 'Some other fake body text',
          userId: 2,
        },
      ])
    )
  }),
  rest.get('https://jsonplaceholder.typicode.com/users', (_req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'Fake Name',
          email: 'fakename@april.biz',
        },
        {
          id: 2,
          name: 'Fake Other Name',
          email: 'otherfakename@april.biz',
        },
      ])
    )
  }),
  rest.get('https://picsum.photos/v2/list', (_req, res, ctx) => {
    return res(
      ctx.json([
        {
          download_url:
            'https://images.pexels.com/photos/934011/pexels-photo-934011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          download_url:
            'https://images.pexels.com/photos/934011/pexels-photo-934011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          download_url:
            'https://images.pexels.com/photos/934011/pexels-photo-934011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          download_url:
            'https://images.pexels.com/photos/934011/pexels-photo-934011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
      ])
    )
  })
)
