import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { TopnavProfile } from './TopnavProfile';

export default {
  title: 'FOH/TopnavProfile',
  component: TopnavProfile,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="flex justify-end">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof TopnavProfile>;

const Template: ComponentStory<typeof TopnavProfile> = ({ ...args }) => (
  <TopnavProfile {...args} />
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
