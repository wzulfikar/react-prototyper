import React, { Component } from 'react'

import {
	message
} from 'antd'

import { HackerNews as C } from '../components/HackerNews'
import {
  fetchTopStories,
  MAX_STORIES,
  IStory,
} from '../services/hackernews/fetchTopStories'

interface IHackerNewsState {
  stories: Array<IStory>
  hasMoreStories: boolean
  maxStories: number
  loadingMore: boolean
  error?: string
}

export default class HackerNews extends Component<{}, IHackerNewsState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      error: undefined,
      stories: this._getStoriesFromStorage(),
      loadingMore: false,
      hasMoreStories: true,
      maxStories: MAX_STORIES,
    }
  }

  _getStoriesFromStorage() {
    return JSON.parse(localStorage.getItem('hackernews_stories') || '[]')
  }

  _updateStories(stories: IStory[], append?: boolean) {
    if (append) {
      stories = [...this.state.stories, ...stories]
    }

    this.setState({ stories })
    localStorage.setItem('hackernews_stories', JSON.stringify(stories))
  }

  loadMore = async () => {
  	this.setState({loadingMore: true})
    if (this.state.stories.length >= this.state.maxStories) {
      this.setState({ hasMoreStories: false })
      return
    }

    try {
	    let moreStories = await fetchTopStories(5, this.state.stories.length)
	    this._updateStories(moreStories, true)
    } catch(error) {
  		message.error('Oops! Something went wrong :(');
    	this.setState({ error })
    } finally {
	  	this.setState({loadingMore: false})
    }
  }

  refresh = async () => {
    this.setState({ stories: [] })
    try {
	    this._updateStories(await fetchTopStories(5))
    } catch (error) {
  		message.error('Oops! Something went wrong :(');
      this.setState({ error })
    }
  }

  async componentDidMount() {
    // only load the stories once
    if (!this.state.stories.length) {
      this.refresh()
    }
  }

  render() {
    return (
      <div
        className="container is-fluid"
        style={{ maxWidth: 650, margin: 'auto' }}
      >
        {this.state.error ? (
          <div className="has-text-centered">{this.state.error.toString()}</div>
        ) : (
          <C
            stories={this.state.stories}
            loadingMore={this.state.loadingMore}
            loadMore={this.state.hasMoreStories ? this.loadMore : undefined}
          />
        )}

        <div className="has-text-centered" style={{ margin: 20 }}>
          <a onClick={this.refresh} className="has-text-grey">Refresh</a>
        </div>
      </div>
    )
  }
}
