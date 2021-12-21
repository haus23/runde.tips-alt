import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Kennung',
  placeholder: 'Kurzer eindeutiger Schlüssel in Kleinbuchstaben',
};

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  label: 'Vorname',
  labelHidden: true,
  placeholder: 'Vorname',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'PLZ',
  errorMsg: 'Zwingend fünf Ziffern',
};
