import React from 'react'

import {
	Badge,
	Switch,
	Row,
	Col,
	Spin,
	Rate,
	List,
	Avatar,
	Divider,
	BackTop,
	Icon,
	Tabs,
} from 'antd'

import '../styles/components/antd.less'

const TabPane = Tabs.TabPane

// dummy data source for ant list
type DummyData = {
	title: string
}

const data: DummyData[] = [
	{
		title: 'Ant Design Title 1',
	},
	{
		title: 'Ant Design Title 2',
	},
	{
		title: 'Ant Design Title 3',
	},
	{
		title: 'Ant Design Title 4',
	},
]

const Title = (props: any) => <div className="title">{props.children}</div>

interface IAntDesignProps {
	onSwitch: (checked: boolean) => void
	onRowClick: (item: string) => void
}

export const AntDesign = (props: IAntDesignProps) => (
	<div className="antd-container">
		<h2 className="header">Ant Design Components Demo</h2>
		<Row type="flex" justify="center">
			<Col xs={6} md={4}>
				<Title>Spin</Title>
				<Spin />
			</Col>
			<Col xs={6} md={4}>
				<Title>Switch</Title>
				<Switch defaultChecked onChange={(checked) => {props.onSwitch(checked)}}/>
			</Col>
			<Col xs={6} md={4}>
				<Title>Badge (standalone)</Title>
				<Badge count={5} />
			</Col>
			<Col xs={6} md={4}>
				<Title>Rate (custom icon)</Title>
				<Rate character={<Icon type="heart" />} count={3} allowHalf />
			</Col>
		</Row>

		<Divider />

		<Row type="flex" justify="center">
			<Col>
				<Title>List</Title>
				<List
					itemLayout="horizontal"
					dataSource={data}
					renderItem={(item: DummyData) => (
						<List.Item>
							<List.Item.Meta
								avatar={
									<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
								}
								title={<a onClick={() => {props.onRowClick(item.title)}}>{item.title}</a>}
								description="Ant Design, a design language for background applications, is refined by Ant UED Team"
							/>
						</List.Item>
					)}
				/>
			</Col>
		</Row>

		<Divider />

		<Row type="flex" justify="center">
			<Col span={12}>
				<Title>Tabs</Title>
				<Tabs defaultActiveKey="1" style={{ height: 220 }}>
					<TabPane tab="Tab 1" key="1">
						Content of tab 1
					</TabPane>
					<TabPane tab="Tab 2" key="2">
						Content of tab 2
					</TabPane>
					<TabPane tab="Tab 3" key="3">
						Content of tab 3
					</TabPane>
				</Tabs>
			</Col>
		</Row>

		<BackTop />
	</div>
)

export default AntDesign
