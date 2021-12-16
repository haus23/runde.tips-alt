import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ModalDialog } from './ModalDialog';

export default {
  title: 'Components/ModalDialog',
  component: ModalDialog,
  argTypes: { onClose: { action: 'closed' } },
} as ComponentMeta<typeof ModalDialog>;

const Template: ComponentStory<typeof ModalDialog> = ({ ...args }) => (
  <ModalDialog {...args}>
    <div>
      <h2 className="text-lg pb-2">Titel</h2>
      <hr />
      <p className="mt-4">Content</p>
    </div>
  </ModalDialog>
);

export const Default = Template.bind({});
Default.args = {
  open: false,
};
