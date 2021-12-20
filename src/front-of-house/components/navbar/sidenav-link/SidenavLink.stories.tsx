import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { SidenavLink } from './SidenavLink';

export default {
  title: 'FOH/SidenavLink',
  component: SidenavLink,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof SidenavLink>;

const Template: ComponentStory<typeof SidenavLink> = ({ ...args }) => (
  <SidenavLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Tabelle',
  to: '/tabelle',
};
