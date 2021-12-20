import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Sidenav } from './Sidenav';

export default {
  title: 'FOH/Sidenav',
  component: Sidenav,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  argTypes: { onClose: { action: 'closed' } },
} as ComponentMeta<typeof Sidenav>;

const Template: ComponentStory<typeof Sidenav> = ({ ...args }) => (
  <Sidenav {...args} />
);

export const Default = Template.bind({});
Default.args = {
  user: null,
};

export const Authenticated = Template.bind({});
Authenticated.args = {
  ...Default.args,
  user: {
    name: 'Micha',
    email: 'micha@haus23.net',
    imageUrl:
      'https://www.gravatar.com/avatar/dd4a6ddb3c164ad80cb61afb22bc4075',
  },
};
