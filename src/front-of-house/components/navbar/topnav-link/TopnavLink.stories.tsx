import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { TopnavLink } from './TopnavLink';

export default {
  title: 'FOH/TopnavLink',
  component: TopnavLink,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="h-16 flex">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof TopnavLink>;

const Template: ComponentStory<typeof TopnavLink> = ({ ...args }) => (
  <TopnavLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Tabelle',
  to: '/tabelle',
};
