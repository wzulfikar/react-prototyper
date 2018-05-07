import fetchTopStories from './fetchTopStories'

it('should fetch hackernews top 5 stories', async () => {
  const stories = await fetchTopStories(5)
  // console.log('stories', stories)

  expect(stories.length).toBe(5)

  // check object shape
  expect(stories[0]).toMatchObject(
    expect.objectContaining({
      id: expect.any(Number),
      by: expect.any(String),
      title: expect.any(String),
    })
  )
})
