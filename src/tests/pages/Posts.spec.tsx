import { render, screen } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import Posts, { getStaticProps } from '../../pages/posts'
import { getPrismicClient } from '../../services/prismic'

jest.mock('../../services/stripe')

const posts = [
  {
    slug: 'my-new-post',
    title: 'My new post',
    excerpt: 'Post excerpt',
    updatedAt: 'May 04',
  }
]

jest.mock('../../services/prismic')

describe('Posts page', () => {
  it('should render correctly', () => {
    render(
      <Posts
        posts={posts}
      />
    )
    expect(screen.getByText('My new post')).toBeInTheDocument()
  })

  it('should load initial data', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient)
    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: 'my-new-post',
            data: {
              title: [
                {
                  type: 'heading',
                  text: 'My new post'
                }
              ],
              content: [
                {
                  type: 'paragraph',
                  text: 'Post excerpt'
                }
              ],
            },
            last_publication_date: '05-04-2022'
          }
        ]
      })
    } as any)

    const response = await getStaticProps({})
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [{
            slug: 'my-new-post',
            title: 'My new post',
            excerpt: 'Post excerpt',
            updatedAt: '04 de maio de 2022'
          }]
        }
      })
    )
  })
})