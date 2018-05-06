import React from 'react'

// storybook stuffs
import { storiesOf, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

addDecorator((story, ctx) => withInfo()(story)(ctx))

// custom components
import AntDesign from '../src/components/AntDesign'
import HelloWorld from '../src/components/HelloWorld'

// stubs
import stubs from '../src/stubs'

// stories
storiesOf('Demo', module)
	.add('HelloWorld', () => (
		<HelloWorld
			username={stubs.user.name}
			onMouseEnter={action('mouse enter')}
		/>
	))
	.add('AntDesign', () => (
		<AntDesign 
			onSwitch={action('switch changed')}
			onRowClick={action('row clicked')} 
			onRateChange={action('rate changed')} />
	))
