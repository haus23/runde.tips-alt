import { Button } from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Click mich',
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  primary: true,
};
