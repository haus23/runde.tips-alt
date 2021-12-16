import { fireEvent, render, screen } from '@testing-library/react';
import { TeamForm } from '@/lib/ui/forms/team-form/TeamForm';

describe('TeamForm', () => {
  test('changes id input to lowercase', () => {
    render(<TeamForm onSave={() => {}} validateId={() => true} />);

    const idField: HTMLInputElement = screen.getByLabelText('ID', {
      exact: false,
    });
    fireEvent.change(idField, { target: { value: 'UPPERCASE' } });

    expect(idField.value).toBe('UPPERCASE'.toLowerCase());
  });
});
