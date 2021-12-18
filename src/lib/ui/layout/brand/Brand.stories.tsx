import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Brand } from './Brand';

export default {
  title: 'Layout/Brand',
  component: Brand,
  decorators: [(Story) => <MemoryRouter initialEntries={['/']}><Story /></MemoryRouter>],
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = ({ ...args }) => (
  <Brand {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: '',
};
