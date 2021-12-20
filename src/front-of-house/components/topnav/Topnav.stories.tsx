import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Topnav } from './Topnav';

export default {
  title: 'FOH/Topnav',
  component: Topnav,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="flex justify-between h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Topnav>;

const Template: ComponentStory<typeof Topnav> = ({ ...args }) => (
  <Topnav {...args} />
);

export const Default = Template.bind({});
Default.args = {
  user: null,
};

export const Authenticated = Template.bind({});
Authenticated.args = {
  user: {
    name: 'Micha',
    email: 'micha@haus23.net',
    imageUrl:
      'https://www.gravatar.com/avatar/dd4a6ddb3c164ad80cb61afb22bc4075',
  },
};
