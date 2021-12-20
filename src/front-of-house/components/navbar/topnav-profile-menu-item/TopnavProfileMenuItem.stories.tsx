import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { TopnavProfileMenuItem } from './TopnavProfileMenuItem';

export default {
  title: 'FOH/TopnavProfileMenuItem',
  component: TopnavProfileMenuItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Menu>
          <Story />
        </Menu>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof TopnavProfileMenuItem>;

const Template: ComponentStory<typeof TopnavProfileMenuItem> = ({
  ...args
}) => <TopnavProfileMenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Einstellungen',
  to: '/einstellungen',
};
