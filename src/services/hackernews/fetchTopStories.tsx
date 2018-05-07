import axios from 'axios'

export interface IStory {
  id: number
  by: string
  title: string
}

export const MAX_STORIES = 500

export const fetchTopStories: any = async (
  limit: number,
  offset: number = 0
): Promise<Array<IStory>> => {
  limit += offset
  if (limit > MAX_STORIES) {
    throw new Error("`limit` can't be more than 500")
  }

  const client = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0',
    timeout: 2000,
  })

  let stories: Array<IStory> = []
  try {
    // get IDs of top stories
    const topStories = await client.get('/topstories.json')

    // prepare to fetch stories from above IDs
    let storyPromises: Array<any> = []
    let counter = 0
    for (let id of topStories.data) {
      counter++
      if (offset && counter <= offset) {
        continue
      }

      if (counter <= limit) {
        storyPromises.push(client.get(`/item/${id}.json`))
        continue
      }

      break
    }

    // fetch all stories in one go
    const fetchStories = await Promise.all(storyPromises)

    // map fetched stories into `stories`
    fetchStories.map(story => {
      let { id, by, title } = story.data
      stories.push({ id, by, title })
    })
  } catch (err) {
    throw err
  }

  return stories
}

export default fetchTopStories
