import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TeamForm } from './TeamForm';

export default {
  title: 'Forms/TeamForm',
  component: TeamForm,
  argTypes: { onSave: { action: 'saved' }, onCancel: { action: 'canceled' } },
} as ComponentMeta<typeof TeamForm>;

const Template: ComponentStory<typeof TeamForm> = ({ ...args }) => (
  <TeamForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  validateId: (id?) => {
    return id ? id !== 'fcb' : true;
  },
};
