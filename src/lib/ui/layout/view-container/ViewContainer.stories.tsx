import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ViewContainer } from './ViewContainer';

export default {
  title: 'Layout/ViewContainer',
  component: ViewContainer,
  decorators: [
    (Story) => (
      <div className="h-screen bg-gray-100">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ViewContainer>;

const Template: ComponentStory<typeof ViewContainer> = ({
  children,
  ...args
}) => <ViewContainer {...args}>{children}</ViewContainer>;

export const Default = Template.bind({});
Default.args = {
  title: 'Startseite',
  children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
    aut consectetur cumque deleniti dicta dolor eaque error ipsum necessitatibus
    nisi non odio officiis pariatur ratione, repudiandae sit temporibus
    tenetur voluptatem!`,
};
