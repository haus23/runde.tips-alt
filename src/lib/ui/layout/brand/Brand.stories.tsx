import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Brand } from './Brand';

export default {
  title: 'Layout/Brand',
  component: Brand,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = () => <Brand />;

export const Default = Template.bind({});
