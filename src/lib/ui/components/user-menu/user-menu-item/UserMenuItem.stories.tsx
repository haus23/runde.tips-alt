import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { UserMenuItem } from './UserMenuItem';

export default {
  title: 'FOH/UserMenuItem',
  component: UserMenuItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Menu>
          <Story />
        </Menu>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof UserMenuItem>;

const Template: ComponentStory<typeof UserMenuItem> = ({ ...args }) => (
  <UserMenuItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Einstellungen',
  to: '/einstellungen',
};
