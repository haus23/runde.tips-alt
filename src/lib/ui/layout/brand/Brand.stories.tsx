import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Brand } from './Brand';

export default {
  title: 'Layout/Brand',
  component: Brand,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = ({ ...args }) => (
  <Brand {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: '',
};
