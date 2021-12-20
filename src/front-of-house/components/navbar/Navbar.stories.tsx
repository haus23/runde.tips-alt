import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

export default {
  title: 'FOH/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = ({ ...args }) => (
  <Navbar {...args} />
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
