// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { <FTName | pascalcase> } from '.'
import themeDecorator from '$sb/theme-decorator'
import { boxDecorator } from '$sb/box-decorator'

type TComponent = typeof <FTName | pascalcase>

export default {
  title: 'Components/ <FTName | pascalcase>',
  component: <FTName | pascalcase>,
  decorators: [themeDecorator, boxDecorator()],
} as ComponentMeta<TComponent>

const Template: ComponentStory<TComponent> = args => (
  <<FTName | pascalcase> {...args} />
)

export const Default = Template.bind({})
Default.args = {}
