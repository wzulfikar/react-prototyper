import React from 'react'

import { List, Spin, Row, Col, Button } from 'antd'

import '../styles/components/antd.less'

import { IStory } from '../services/hackernews/fetchTopStories'

interface IHackerNewsProps {
  stories: IStory[]
  loadingMore?: boolean
  loadMore?: () => void
}

export const HackerNews = (props: IHackerNewsProps) => (
  <div className="antd-container">
    <h2 className="header">HackerNews Top Stories</h2>
    <Row type="flex" justify="center">
      <Col>
        {props.stories.length ? (
          <List
            itemLayout="horizontal"
            dataSource={props.stories}
            renderItem={(item: IStory, idx: number) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <a
                      target="blank"
                      href={`https://news.ycombinator.com/item?id=${item.id}`}
                    >
                      {idx + 1}. {item.title}
                    </a>
                  }
                  description={`by ${item.by}`}
                />
              </List.Item>
            )}
          />
        ) : (
          <Spin />
        )}
      </Col>
    </Row>
    {props.loadMore &&
      props.stories.length > 0 && (
        <Row type="flex" justify="center" style={{ marginBottom: 20 }}>
          <Button loading={props.loadingMore} onClick={props.loadMore}>Load more</Button>
        </Row>
      )}
  </div>
)

export default HackerNews
