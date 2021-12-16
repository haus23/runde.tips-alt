import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TeamForm } from './TeamForm';

export default {
  title: 'Forms/TeamForm',
  component: TeamForm,
  argTypes: { onSave: { action: 'saved' }, onCancel: { action: 'canceled' } },
} as ComponentMeta<typeof TeamForm>;

const Template: ComponentStory<typeof TeamForm> = ({ ...args }) => (
  <TeamForm {...args}></TeamForm>
);

export const Default = Template.bind({});
