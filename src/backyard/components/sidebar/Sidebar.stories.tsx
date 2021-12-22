import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export default {
  title: 'Backyard/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="text-gray-50">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'darkmode',
      values: [
        {
          name: 'darkmode',
          value: '#111827',
        },
      ],
    },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = ({ ...args }) => (
  <Sidebar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  user: {
    name: 'Micha',
    email: 'micha@haus23.net',
    imageUrl:
      'https://www.gravatar.com/avatar/dd4a6ddb3c164ad80cb61afb22bc4075',
  },
};
